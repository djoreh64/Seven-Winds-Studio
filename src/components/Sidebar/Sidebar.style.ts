import styled from "styled-components";
import { HEADER_HEIGHT } from "../Header/Header.style";

export const SIDEBAR_WIDTH = 234;

export const Sidebar = styled.aside`
  position: sticky;
  top: 44px;

  grid-column: 1/2;

  width: ${SIDEBAR_WIDTH}px;
  height: 100vh;

  background-color: #27272a;

  border-right: 1px solid #414144;
`;

export const ProjectInfo = styled.div`
  padding: 8px 20px;
  padding-right: 7px;

  height: ${HEADER_HEIGHT}px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #414144;
  border-top: none;
  border-right: none;
`;

export const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  color: #a1a1aa;
`;

export const ProjectName = styled.h3`
  margin: 0;

  font-weight: 400;
  font-size: 14px;
  text-wrap: nowrap;
`;

export const ProjectDescription = styled.p`
  margin: 0;

  font-size: 10px;
`;

export const Projects = styled.ul`
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
`;

export const Project = styled.li<{ $active: boolean }>`
  padding: 5px 20px;

  display: flex;
  align-items: center;
  gap: 14px;

  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  background-color: ${({ $active }) => ($active ? "#a1a1aa" : "transparent")};

  &:hover {
    background-color: ${({ $active }) => ($active ? "#a1a1aa" : "#a1a1aa50")};
  }
`;

export const ProjectTitle = styled.h3`
  margin: 0;

  font-size: 14px;
  font-weight: 400;

  display: flex;
  gap: 14px;
`;

export const Button = styled.button`
  border: none;

  background-color: transparent;

  cursor: pointer;
`;
