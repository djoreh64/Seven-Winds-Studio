import { IRow } from "./Row.types";

export const updateRowInTree = (tree: IRow[], updatedRow: IRow): IRow[] =>
  tree.map((r) => {
    if (r.id === updatedRow.id) return updatedRow;
    if (r.child && r.child.length > 0)
      return { ...r, child: updateRowInTree(r.child, updatedRow) };
    return r;
  });

export const removeRowFromTree = (tree: IRow[], id: number): IRow[] =>
  tree.reduce<IRow[]>((acc, curr) => {
    if (curr.id === id) return acc;
    const newChild = curr.child ? removeRowFromTree(curr.child, id) : [];
    acc.push({ ...curr, child: newChild });
    return acc;
  }, []);

export const mergeRows = (existing: IRow[], changed: IRow[]): IRow[] => {
  const changedMap = new Map(changed.map((r) => [r.id, r]));
  const merge = (rows: IRow[]): IRow[] =>
    rows.map((r) => {
      const updated = changedMap.get(r.id);
      const child = r.child ? merge(r.child) : [];
      return updated ? { ...updated, child } : { ...r, child };
    });
  return merge(existing);
};
