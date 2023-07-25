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
import CalendarPage from "Pages/PageCalendar";

type MenuItem = Required<MenuProps>["items"][number];

/**
 * Renders the page on click
 * @generator
 * @param menuItem
 * @returns React Element
 */
const loadPage = (menuItem: any) => {
  let Ele = <></>;
  switch (menuItem.key) {
    case "1":
      Ele = <CommonLorePage />;
      break;
    case "2":
      Ele = <LocationsPage />;
      break;
    case "3":
      Ele = <DeitiesPage />;
      break;
    case "4":
      Ele = <RacesPage />;
      break;
    case "5":
      Ele = <TablesPage />;
      break;
    case "6":
      Ele = <LibraryPage />;
      break;
    case "7":
      Ele = <PricingPage />;
      break;
    case "8":
      Ele = <ToolsPage />;
      break;
    case "9":
      Ele = <HomebrewsPage />;
      break;
    case "10":
      Ele = <MapOverlayPage />;
      break;
    case "11":
      Ele = <MapLegendPage />;
      break;
    case "12":
      Ele = <CalendarPage />;
      break;

    default:
      break;
  }
  render(Ele, document.getElementById("PageContent"));
};

/**
 * Gets Deity icons from the Sidenav icon
 * @generator
 * @param pageName
 * @param avatarSize
 * @returns Deity Avatar
 */
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

/**
 * Generates Sidebar Menu items
 * @generator
 * @param label
 * @param key
 * @param icon
 * @param element
 * @param children
 * @returns MenuItem(antd)
 */
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

/**
 * This is the main sidebar, only overruled by itself
 * @returns Sider(antd)
 */
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
          onClick={() =>
            render(
              <>
                <section
                  className="h-full"
                  style={{
                    backgroundImage: 'url("./background.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                >
                  <GetCrumbs path="Teothe3K" />
                  <Card bordered={false} className="w-full">
                    <Empty />
                  </Card>
                </section>
              </>,
              document.getElementById("PageContent")
            )
          }
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
          getItem("Common Lore", "1", getIcon("CommonLore", collapsed)),
          getItem("Planes of Existence", "2", getIcon("Locations", collapsed)),
          getItem("Deities", "3", getIcon("Deities", collapsed)),
          getItem("Races", "4", getIcon("Races", collapsed)),
          getItem("Tables", "5", getIcon("Tables", collapsed)),
          getItem("Library", "6", getIcon("Library", collapsed)),
          getItem("Pricing", "7", getIcon("Pricing", collapsed)),
          getItem("Tools", "8", getIcon("Tools", collapsed)),
          getItem("Homebrews", "9", getIcon("Homebrews", collapsed)),
          getItem("Map Overlay", "10", getIcon("MapOverlay", collapsed)),
          getItem("Map Legend", "11", getIcon("MapLegend", collapsed)),
          getItem("Calendar", "12", getIcon("Calendar", collapsed)),
        ]}
      />
    </Sider>
  );
}
