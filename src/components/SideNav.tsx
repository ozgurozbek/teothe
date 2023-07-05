import { useState } from "react";
import { render } from "react-dom";
import { Menu, Image, Avatar } from "antd";
import Sider from "antd/es/layout/Sider";

import type { MenuProps } from "antd";

import CommonLorePage from "Pages/PageCommonLore";
import DeitiesPage from "Pages/PageDeities";
import GetQuest from "App/getQuest/page";
import TablesPage from "Pages/PageTables";
import LibraryPage from "Pages/PageLibrary";
import MapLegendPage from "Pages/PageMapLegend";
import MapOverlayPage from "Pages/PageMapOverlay";
import LocationsPage from "Pages/PageLocations";
import RacesPage from "Pages/PageRaces";
import HomebrewsPage from "Pages/PageHomebrews";
import PricingPage from "Pages/PageCommonPricing";
import ToolsPage from "Pages/PageTools";

type MenuItem = Required<MenuProps>["items"][number];

function loadPage(pageComponent: React.ReactElement) {
  render(pageComponent, document.getElementById("PageContent"));
}

function getIcon(pageName: string, avatarSize: boolean) {
  return (
    <Avatar
      size={avatarSize ? 16 : 24}
      src={"./Icons/SideNav/" + pageName + ".svg"}
      alt={pageName + " Icon"}
      draggable={false}
      shape="square"
    ></Avatar>
  );
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

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  // Menu > defaultSelectedKeys={['1']}
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => {
        setCollapsed(value);
      }}
    >
      <Image src="./teothe3K.png" alt="Teothe3K Icon" preview={false} />
      <Menu
        theme="dark"
        mode="inline"
        items={[
          getItem(
            <a
              onClick={() => {
                loadPage(<CommonLorePage />);
              }}
            >
              Common Lore
            </a>,
            "1",
            getIcon("CommonLore", collapsed)
          ),
          getItem(
            <a
              onClick={() => {
                loadPage(<LocationsPage />);
              }}
            >
              Planes of Existence
            </a>,
            "2",
            getIcon("Locations", collapsed)
          ),
          getItem(
            <a
              onClick={() => {
                loadPage(<DeitiesPage />);
              }}
            >
              Deities
            </a>,
            "3",
            getIcon("Deities", collapsed)
          ),
          getItem(
            <a
              onClick={() => {
                loadPage(<TablesPage />);
              }}
            >
              Tables
            </a>,
            "4",
            getIcon("Tables", collapsed)
          ),
          getItem(
            <a
              onClick={() => {
                loadPage(<LibraryPage />);
              }}
            >
              Library
            </a>,
            "5",
            getIcon("Library", collapsed)
          ),
          getItem(
            <a
              onClick={() => {
                loadPage(<PricingPage />);
              }}
            >
              Pricing
            </a>,
            "6",
            getIcon("Pricing", collapsed)
          ),
          getItem(
            <a
              onClick={() => {
                loadPage(<ToolsPage />);
              }}
            >
              Tools
            </a>,
            "7",
            getIcon("Tools", collapsed)
          ),
          getItem(
            <a
              onClick={() => {
                loadPage(<HomebrewsPage />);
              }}
            >
              Homebrews
            </a>,
            "11",
            getIcon("Homebrews", collapsed)
          ),
          getItem(
            <a
              onClick={() => {
                loadPage(<MapOverlayPage />);
              }}
            >
              Map Overlay
            </a>,
            "12",
            getIcon("MapOverlay", collapsed)
          ),
          getItem(
            <a
              onClick={() => {
                loadPage(<MapLegendPage />);
              }}
            >
              Map Legend
            </a>,
            "13",
            getIcon("MapLegend", collapsed)
          ),
          getItem(
            <a
              onClick={() => {
                loadPage(<RacesPage />);
              }}
            >
              Races
            </a>,
            "14",
            getIcon("Races", collapsed)
          ),
          getItem(
            <a
              onClick={() => {
                loadPage(<GetQuest />);
              }}
            >
              Quest Generator
            </a>,
            "15",
            getIcon("QuestGenerator", collapsed)
          ),
        ]}
      />
    </Sider>
  );
}
