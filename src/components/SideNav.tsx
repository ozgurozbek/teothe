import { useState } from "react";
import { render } from "react-dom";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

import CommonLorePage from "Pages/PageCommonLore";
import DeitiesPage from "Pages/PageDeities";
import QuestDataPage from "App/getQuest/page";
import TablesPage from "Pages/PageTables";
import LibraryPage from "Pages/PageLibrary";

type MenuItem = Required<MenuProps>["items"][number];

function loadPage(pageComponent: React.ReactElement) {
  render(pageComponent, document.getElementById("PageContent"));
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <a
      onClick={() => {
        loadPage(<CommonLorePage />);
      }}
    >
      Common Lore
    </a>,
    "1",
    <DesktopOutlined />
  ),
  getItem(
    <a
      onClick={() => {
        loadPage(<DeitiesPage />);
      }}
    >
      Deities
    </a>,
    "2",
    <DesktopOutlined />
  ),
  getItem(
    <a
      onClick={() => {
        loadPage(<TablesPage />);
      }}
    >
      Tables
    </a>,
    "3",
    <PieChartOutlined />
  ),
  getItem("Library", "sub1", <UserOutlined />, [
    getItem(
      <a
        onClick={() => {
          loadPage(<LibraryPage />);
        }}
      >
        General
      </a>,
      "4"
    ),
    getItem("Teothe", "5"),
    getItem("Epipremnum", "6"),
    getItem("Thaum", "7"),
    getItem("Choll", "8"),
    getItem("Fiction", "9"),
  ]),
  getItem(
    <a
      onClick={() => {
        loadPage(<LibraryPage />);
      }}
    >
      Not Map Legend
    </a>,
    "10",
    <FileOutlined />
  ),
  getItem("Races", "11", <PieChartOutlined />),
  getItem(
    <a
      onClick={() => {
        loadPage(<QuestDataPage />);
      }}
    >
      Quest Generator
    </a>,
    "12",
    <SettingOutlined />
  ),
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  // Menu > defaultSelectedKeys={['1']}
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <img src="./teothe3K.png" alt="Teothe3K Icon" />
      <Menu theme="dark" mode="inline" items={items} />
    </Sider>
  );
}
