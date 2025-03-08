import styled from "styled-components";

export const HEADER_HEIGHT = 44;

export const Header = styled.header`
  height: ${HEADER_HEIGHT}px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  gap: 31px;

  border: 1px solid #414144;

  font-size: 14px;

  background-color: #27272a;
`;

export const Button = styled.button`
  padding: 0;

  border: none;

  background-color: transparent;

  cursor: pointer;
`;

export const Icons = styled.ul`
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Icon = styled.li`
  display: flex;
  align-items: center;

  cursor: pointer;

  path {
    transition: 0.2s ease-in-out;
  }

  &:hover path {
    fill: #fff;
  }
`;

export const Tabs = styled.ul`
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  gap: 28px;
`;

export const Tab = styled.li<{ $active: boolean }>`
  padding: 12px 0;

  display: flex;
  align-items: center;

  border-bottom: ${(props) =>
    props.$active ? "2px solid #fff" : "2px solid transparent"};

  color: ${(props) => (props.$active ? "#fff" : "#A1A1AA")};

  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;
