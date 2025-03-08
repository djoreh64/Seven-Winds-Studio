import { useEffect, useState } from "react";
import { OutlayStringController } from "src/api/OutlayStringController";
import { IRow } from "./components/Row/Row.types";

export const useRows = () => {
  const [rows, setRows] = useState<IRow[]>([]);

  useEffect(() => {
    const getRows = async () => {
      const data = await OutlayStringController.getAll();
      setRows(data);
    };
    getRows();
  }, []);

  const addRootRow = () => {
    const newRow: IRow = {
      id: Date.now(),
      parentId: null,
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
    setRows((prev) => [...prev, newRow]);
  };

  return { rows, addRootRow, setRows };
};
