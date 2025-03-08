import { Header } from "src/components/Header";
import Sidebar from "src/components/Sidebar";
import * as Styled from "./App.style";
import { RowsProvider } from "./components/Row/Row.context";
import { Table } from "./components/Table";

export function App() {
  return (
    <RowsProvider>
      <Header />
      <Styled.Content>
        <Sidebar />
        <Styled.Main>
          <Styled.Tabs>
            <Styled.Tab>Строительно-монтажные работы</Styled.Tab>
          </Styled.Tabs>
          <Table />
        </Styled.Main>
      </Styled.Content>
      <Styled.GlobalStyle />
    </RowsProvider>
  );
}
