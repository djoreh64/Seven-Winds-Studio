import { useEffect, useState, useCallback } from "react";
import {
  OutlayStringController,
  Payload,
} from "src/api/OutlayStringController";
import { updateRowInTree, removeRowFromTree, mergeRows } from "./Row.service";
import { IRow, IRowProps } from "./Row.types";

const createPayload = (editValues: IRow): Payload => ({
  ...editValues,
  salary: Number(editValues.salary) || 0,
  equipmentCosts: Number(editValues.equipmentCosts) || 0,
  overheads: Number(editValues.overheads) || 0,
  estimatedProfit: Number(editValues.estimatedProfit) || 0,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  supportCosts: 0,
});

const replaceNewRow = (tree: IRow[], row: IRow, serverRow: IRow): IRow[] => {
  return tree.map((r) => {
    if (r.isNew && r.id === row.id)
      return { ...serverRow, child: r.child || [] };
    else if (r.child?.length)
      return { ...r, child: replaceNewRow(r.child, row, serverRow) };
    else return r;
  });
};

const updateRows = (
  prevRows: IRow[],
  changedRows: IRow[],
  serverRow: IRow,
  row: IRow
): IRow[] => {
  let newTree = mergeRows(prevRows, changedRows);

  if (row.isNew) {
    newTree = replaceNewRow(newTree, row, serverRow);
  } else {
    newTree = mergeRows(newTree, [...changedRows, serverRow]);
  }

  return newTree;
};

export const useRow = ({ row, rows = [], setRows }: IRowProps) => {
  const [isEditing, setIsEditing] = useState(row.isNew || row.rowName === "");
  const [editValues, setEditValues] = useState({ ...row });

  useEffect(() => {
    if (!isEditing) {
      setEditValues({ ...row });
    }
  }, [row, isEditing]);

  useEffect(() => {
    if (row.rowName.trim()) setIsEditing(false);
  }, [row.rowName]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const commitEdit = useCallback(async () => {
    if (!editValues.rowName.trim()) return;

    const payload = createPayload(editValues);

    try {
      const response = row.isNew
        ? await OutlayStringController.create({
            ...payload,
            parentId: row.parentId ?? null,
          })
        : await OutlayStringController.update(row.id, payload);

      const changedRows = response.changed;
      const serverRow = response.current;

      if (rows && setRows) {
        setRows((prevRows) =>
          updateRows(prevRows, changedRows, serverRow, row)
        );
      }
    } catch (error) {
      console.error(error);
    }

    setIsEditing(false);
  }, [editValues, row.isNew, row.id, row.parentId, setRows, rows]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") commitEdit();
    },
    [commitEdit]
  );

  const deleteRow = useCallback(async () => {
    if (!rows || !setRows || isEditing) return;

    try {
      const newRows = removeRowFromTree(rows, row.id);
      setRows(newRows);
      await OutlayStringController.delete(row.id);
    } catch (error) {
      setRows(rows);
      console.error(error);
    }
  }, [rows, row.id, setRows]);

  const addChildRow = useCallback(() => {
    if (isEditing || !rows || !setRows) return;

    const newRow: IRow = {
      id: Date.now(),
      parentId: row.id,
      rowName: "",
      total: 0,
      salary: 0,
      mimExploitation: 0,
      machineOperatorSalary: 0,
      materials: 0,
      mainCosts: 0,
      supportCosts: 0,
      equipmentCosts: 0,
      overheads: 0,
      estimatedProfit: 0,
      child: [],
      isNew: true,
    };

    const updatedRow = { ...row, child: [...(row.child || []), newRow] };
    setRows(updateRowInTree(rows, updatedRow));
  }, [isEditing, row, rows, setRows]);

  const countChild = (row: IRow): number => {
    if (!row.child) return 0;
    return row.child.reduce(
      (acc, child) => acc + countChild(child),
      row.child.length
    );
  };

  return {
    isEditing,
    editValues,
    handleInputChange,
    handleKeyDown,
    commitEdit,
    deleteRow,
    addChildRow,
    setIsEditing,
    countChild,
  };
};
