import { HEADER_HEIGHT } from "src/components/Header/Header.style";
import styled, { createGlobalStyle } from "styled-components";

export const ROW_HEIGHT = 60;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  button, input {
    font-family: inherit;
    color: inherit;
  }
  body {
    margin: 0;
    padding: 0;

    font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

    background-color: #202124;
    color: #fff;
  }
`;

export const Main = styled.main`
  grid-column: 2/9;

  overflow-y: auto;
`;

export const Button = styled.button`
  border: none;

  background-color: transparent;
  
  cursor: pointer;
`;

export const Empty = styled.div`
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 24px;

  button {
    padding: 12px;

    border: 1px solid #414144;
    border-radius: 8px;

    font-size: 18px;

    background-color: #27272a;

    transition: all 0.2s ease-out;

    &:hover {
      background-color: #41414480;
    }

    &:active {
      background-color: #41414480;
    }
  }
`;

export const Input = styled.input`
  padding: 10px;

  width: 100%;

  border: 1px solid #414144;
  border-radius: 8px;
  outline: none;

  background-color: transparent;

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: #71717a;
  }
`;

export const Tabs = styled.ul`
  margin: 0;
  padding: 0;

  width: 100%;
  height: ${HEADER_HEIGHT}px;

  display: flex;
  align-items: center;
  gap: 8px;

  border-bottom: 1px solid #414144;

  list-style: none;
`;

export const Tab = styled.li`
  margin: 0;
  padding: 12px 15px;

  border-right: 1px solid #414144;

  text-wrap: nowrap;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;
