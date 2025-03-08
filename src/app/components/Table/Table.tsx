import * as Styled from "./Table.style";
import { Row } from "../Row";
import { useRowsContext } from "../Row/Row.context";
import { IRow } from "../Row/Row.types";
import { Button, Empty } from "src/app/App.style";

const HEAD_CELLS = [
  "Уровень",
  "Наименование работ",
  "Основная з/п",
  "Оборудование",
  "Накладные расходы",
  "Сметная прибыль",
];

function Table() {
  const { rows, addRootRow } = useRowsContext();

  if (rows.length === 0)
    return (
      <Empty>
        <Button onClick={addRootRow}>Добавить строку</Button>
      </Empty>
    );

  return (
    <Styled.Table>
      <Styled.TableHead>
        <Styled.TableRow>
          {HEAD_CELLS.map((cell) => (
            <Styled.TableCellHead key={cell}>{cell}</Styled.TableCellHead>
          ))}
        </Styled.TableRow>
      </Styled.TableHead>
      <Styled.TableBody>
        {rows.map((row: IRow) => (
          <Row key={row.id} row={row} level={0} />
        ))}
      </Styled.TableBody>
    </Styled.Table>
  );
}

export default Table;
