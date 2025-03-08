import { ArrowIcon } from "src/assets/icons/ArrowIcon";
import { ProjectIcon } from "src/assets/icons/ProjectIcon";
import * as Styled from "./Sidebar.style";

const TABS = [
  "По проекту",
  "Объекты",
  "РД",
  "МТО",
  "СМР",
  "График",
  "МиМ",
  "Рабочие",
  "Капвложения",
  "Бюджет",
  "Финансирование",
  "Панорамы",
  "Камеры",
  "Поручения",
  "Контрагенты",
];

const ACTIVE_TAB = TABS[4];

function Sidebar() {
  return (
    <Styled.Sidebar>
      <Styled.ProjectInfo>
        <Styled.ProjectText>
          <Styled.ProjectName>Название проекта</Styled.ProjectName>
          <Styled.ProjectDescription>Аббревиатура</Styled.ProjectDescription>
        </Styled.ProjectText>
        <Styled.Button>
          <ArrowIcon />
        </Styled.Button>
      </Styled.ProjectInfo>
      <Styled.Projects>
        {TABS.map((tab) => (
          <Styled.Project $active={tab === ACTIVE_TAB} key={tab}>
            <ProjectIcon />
            <Styled.ProjectTitle>{tab}</Styled.ProjectTitle>
          </Styled.Project>
        ))}
      </Styled.Projects>
    </Styled.Sidebar>
  );
}

export default Sidebar;
