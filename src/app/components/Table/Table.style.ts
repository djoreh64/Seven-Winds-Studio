import { Button, ROW_HEIGHT } from "src/app/App.style";
import styled from "styled-components";

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  tr:hover {
    background-color: #202124;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  height: ${ROW_HEIGHT}px;
  max-height: ${ROW_HEIGHT}px !important;

  border-bottom: 1px solid #414144;

  transition: all 0.2s ease-out;

  &:hover {
    background-color: #41414430;
  }
`;

export const TableCell = styled.td`
  position: relative;

  padding: 0 15px;

  font-size: 14px;
`;

export const TableCellHead = styled.th`
  padding: 12px 15px;

  font-weight: normal;
  font-size: 14px;
  text-align: left;

  color: #a1a1aa;
`;

export const TabButtons = styled.div<{ $level: number }>`
  position: relative;

  margin-left: ${({ $level }) => $level * 20}px;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  border-radius: 6px;

  transition: all 0.2s ease-out;

  &::before {
    display: ${({ $level }) => ($level > 0 ? "block" : "none")};

    content: "";
    position: absolute;
    bottom: 50%;
    left: -8px;

    height: 1px;

    width: 12px;
    background-color: #ffffff;
  }

  & > button:nth-child(2) {
    opacity: 0;
    transition: all 0.2s ease-out;
  }
  &:hover {
    background-color: #414144;
  }
  &:hover > button:nth-child(2) {
    opacity: 1;
  }
`;

export const TabButton = styled(Button)`
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div<{
  $count: number;
  $childCount: number;
}>`
  display: ${({ $count }) => ($count > 0 ? "block" : "none")};

  position: absolute;
  top: calc(100% - 4px);
  left: 25%;
  translate: -25% 0;

  width: 1px;
  height: ${({ $childCount }) => $childCount * ROW_HEIGHT - 8}px;
  background-color: #ffffff;
`;
