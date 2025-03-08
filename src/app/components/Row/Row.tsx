import * as Styled from "../Table/Table.style";
import { useRow } from "./Row.hook";
import { TabIcon } from "src/assets/icons/TabIcon";
import { TrashIcon } from "src/assets/icons/TrashIcon";
import { useRowsContext } from "./Row.context";
import { EditableFields, IRowProps } from "./Row.types";
import { Input } from "src/app/App.style";

const FIELD_TYPES: Record<keyof EditableFields, string> = {
  rowName: "text",
  salary: "number",
  equipmentCosts: "number",
  overheads: "number",
  estimatedProfit: "number",
};

const FIELDS = Object.keys(FIELD_TYPES) as (keyof EditableFields)[];

export default function Row(props: Readonly<IRowProps>) {
  const { row, level = 0 } = props;
  const { rows, setRows } = useRowsContext();
  const {
    isEditing,
    editValues,
    handleInputChange,
    handleKeyDown,
    deleteRow,
    addChildRow,
    setIsEditing,
    countChild,
  } = useRow({ row, rows, setRows });

  const renderInput = (name: keyof EditableFields, type: string = "text") => (
    <Input
      type={type}
      name={name}
      value={editValues[name]}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      autoFocus={name === "rowName"}
    />
  );

  const renderCell = (name: keyof EditableFields, type = "text") => (
    <Styled.TableCell key={name}>
      {isEditing ? renderInput(name, type) : row[name]}
    </Styled.TableCell>
  );

  return (
    <>
      <Styled.TableRow onDoubleClick={() => !row.isNew && setIsEditing(true)}>
        <Styled.TableCell>
          <Styled.TabButtons $level={level}>
            <Styled.TabButton onClick={addChildRow}>
              <TabIcon color="#7890B2" />
            </Styled.TabButton>
            <Styled.TabButton onClick={deleteRow}>
              <TrashIcon color="#DF4444" size={16} />
            </Styled.TabButton>
            <Styled.Line
              $childCount={countChild(row)}
              $count={row.child?.length ?? 0}
            />
          </Styled.TabButtons>
        </Styled.TableCell>
        {FIELDS.map((field: keyof EditableFields) =>
          renderCell(field, FIELD_TYPES[field])
        )}
      </Styled.TableRow>
      {row.child?.map((childRow, index) => (
        <Row key={childRow.id} row={childRow} level={level + 1} />
      ))}
    </>
  );
}
