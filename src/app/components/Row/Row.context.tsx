import React, { createContext, useContext, ReactNode } from "react";
import { IRow } from "./Row.types";
import { useRows } from "src/app/App.hook";

interface RowsContextProps {
  rows: IRow[];
  addRootRow: () => void;
  setRows: React.Dispatch<React.SetStateAction<IRow[]>>;
}

const RowsContext = createContext<RowsContextProps | undefined>(undefined);

export const RowsProvider = ({ children }: { children: ReactNode }) => {
  const { rows, addRootRow, setRows } = useRows();

  return (
    <RowsContext.Provider value={{ rows, setRows, addRootRow }}>
      {children}
    </RowsContext.Provider>
  );
};

export const useRowsContext = (): RowsContextProps => {
  const context = useContext(RowsContext);
  if (!context) {
    throw new Error("useRowsContext должен использоваться внутри RowsProvider");
  }
  return context;
};
