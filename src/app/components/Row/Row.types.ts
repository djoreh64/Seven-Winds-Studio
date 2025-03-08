export interface IRow {
  id: number;
  parentId?: number | null;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  child: IRow[] | null;
  isNew?: boolean;
}

export interface IRowProps {
  row: IRow;
  rows?: IRow[];
  level?: number;
  setRows?: React.Dispatch<React.SetStateAction<IRow[]>>;
}

export type EditableFields = Pick<
  IRow,
  "rowName" | "salary" | "equipmentCosts" | "overheads" | "estimatedProfit"
>;
