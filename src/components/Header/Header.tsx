import { ShareIcon } from "src/assets/icons/ShareIcon";
import * as Styled from "./Header.style";
import { MenuIcon } from "src/assets/icons/MenuIcon";
import { useState } from "react";

const TABS = ["Просмотр", "Управление"];
const ICONS = [MenuIcon, ShareIcon];

function Header() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Styled.Header>
      <Styled.Icons>
        {ICONS.map((Icon, index) => (
          <Styled.Icon key={index}>
            <Styled.Button>{<Icon color="#A1A1AA" />}</Styled.Button>
          </Styled.Icon>
        ))}
      </Styled.Icons>
      <Styled.Tabs>
        {TABS.map((tab, index) => (
          <Styled.Tab
            key={tab}
            $active={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            <Styled.Button>{tab}</Styled.Button>
          </Styled.Tab>
        ))}
      </Styled.Tabs>
    </Styled.Header>
  );
}

export default Header;
