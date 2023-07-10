import { useState } from "react";
import { render } from "react-dom";
import { Menu, Image, Avatar, Empty, Card } from "antd";
import Sider from "antd/es/layout/Sider";

import type { MenuProps } from "antd";

import CommonLorePage from "Pages/PageCommonLore";
import DeitiesPage from "Pages/PageDeities";
import TablesPage from "Pages/PageTables";
import LibraryPage from "Pages/PageLibrary";
import MapLegendPage from "Pages/PageMapLegend";
import MapOverlayPage from "Pages/PageMapOverlay";
import LocationsPage from "Pages/PageLocations";
import RacesPage from "Pages/PageRaces";
import HomebrewsPage from "Pages/PageHomebrews";
import PricingPage from "Pages/PageCommonPricing";
import ToolsPage from "Pages/PageTools";
import GetCrumbs from "./NavigationCrumb";

type MenuItem = Required<MenuProps>["items"][number];

const loadPage = (menuItem: any) => {
  //if menuItem.key bilmemne ise bunu renderla etc.
  render(<CommonLorePage />, document.getElementById("PageContent"));
};

//function loadPage(pageComponent: React.ReactElement) {
//  render(pageComponent, document.getElementById("PageContent"));
//}

function getIcon(pageName: string, avatarSize: boolean) {
  return (
    <Avatar
      className="transition-all"
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
  element?: React.ReactElement,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    element,
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
      <div>
        <Image
          className="cursor-pointer transition-all"
          style={{
            position: "fixed",
            width: collapsed ? "80px" : "200px",
          }}
          src="./teothe3K.png"
          alt="Teothe3K Icon"
          preview={false}
          onClick={() => {
            loadPage(
              <>
                <GetCrumbs path="Teothe3K" />
                <Card bordered={false} className="w-full">
                  <Empty />
                </Card>
              </>
            );
          }}
        />
      </div>

      <Menu
        onClick={loadPage}
        style={{
          position: "fixed",
          width: collapsed ? "80px" : "inherit",
          // top: "22%",
          top: collapsed ? 60 : 100,
        }}
        theme="dark"
        mode="inline"
        items={[
          getItem(
            "Common Lore",
            "1",
            getIcon("CommonLore", collapsed),
            <CommonLorePage />
          ),
          getItem(
            "Planes of Existence",
            "2",
            getIcon("Locations", collapsed),
            <LocationsPage />
          ),
          getItem(
            <div
              onClick={() => {
                loadPage(<DeitiesPage />);
              }}
            >
              Deities
            </div>,
            "3",
            getIcon("Deities", collapsed)
          ),
          getItem(
            <div
              onClick={() => {
                loadPage(<RacesPage />);
              }}
            >
              Races
            </div>,
            "14",
            getIcon("Races", collapsed)
          ),
          getItem(
            <div
              onClick={() => {
                loadPage(<TablesPage />);
              }}
            >
              Tables
            </div>,
            "4",
            getIcon("Tables", collapsed)
          ),
          getItem(
            <div
              onClick={() => {
                loadPage(<LibraryPage />);
              }}
            >
              Library
            </div>,
            "5",
            getIcon("Library", collapsed)
          ),
          getItem(
            <div
              onClick={() => {
                loadPage(<PricingPage />);
              }}
            >
              Pricing
            </div>,
            "6",
            getIcon("Pricing", collapsed)
          ),
          getItem(
            <div
              onClick={() => {
                loadPage(<ToolsPage />);
              }}
            >
              Tools
            </div>,
            "7",
            getIcon("Tools", collapsed)
          ),
          getItem(
            <div
              onClick={() => {
                loadPage(<HomebrewsPage />);
              }}
            >
              Homebrews
            </div>,
            "11",
            getIcon("Homebrews", collapsed)
          ),
          getItem(
            <div
              onClick={() => {
                loadPage(<MapOverlayPage />);
              }}
            >
              Map Overlay
            </div>,
            "12",
            getIcon("MapOverlay", collapsed)
          ),
          getItem(
            <div
              onClick={() => {
                loadPage(<MapLegendPage />);
              }}
            >
              Map Legend
            </div>,
            "13",
            getIcon("MapLegend", collapsed)
          ),
        ]}
      />
    </Sider>
  );
}
