"use client"

import React, { useState, Suspense } from "react";
import { render } from "react-dom";
import { Menu, Image, Card, Skeleton } from "antd";
import type { MenuProps } from "antd";

//Instead of importing all pages at the beginning, this dynamical importing can help reduce the initial bundle size.
const CommonLorePage = React.lazy(() => import("@/app/common-lore/page"));
const DeitiesPage = React.lazy(() => import("@/app/deities/page"));
const TablesPage = React.lazy(() => import("@/app/tables/page"));
const LibraryPage = React.lazy(() => import("@/app/library/page"));
const MapLegendPage = React.lazy(() => import("@/app/map-legend/page"));
const MapOverlayPage = React.lazy(() => import("@/app/map-overlay/page"));
const LocationsPage = React.lazy(() => import("@/app/locations/page"));
const RacesPage = React.lazy(() => import("@/app/races/page"));
const HomebrewsPage = React.lazy(() => import("@/app/homebrews/page"));
const PricingPage = React.lazy(() => import("@/app/pricing/page"));
const ToolsPage = React.lazy(() => import("@/app/tools/page"));
const CalendarPage = React.lazy(() => import("@/app/calendar/page"));
const LanguagesPage = React.lazy(() => import("@/app/languages/page"));
const GetCrumbs = React.lazy(() => import("./NavigationCrumb"));
const SimpleContent = React.lazy(() => import("./SimpleCon"));
type MenuItem = Required<MenuProps>["items"][number];

/**
 * Renders the page on click
 * @generator
 * @param menuItem
 * @returns React Element
 */
const loadPage = (menuItem: any) => {
  let ele = <></>;
  let eleLabel = "";
  switch (menuItem.key) {
    case "1":
      ele = <CommonLorePage />;
      eleLabel = "common-lore"
      break;
    case "2":
      ele = <LocationsPage />;
      eleLabel = "planes"
      break;
    case "3":
      ele = <DeitiesPage />;
      eleLabel = "deities"
      break;
    case "4":
      ele = <RacesPage />;
      eleLabel = "races"
      break;
    case "5":
      ele = <TablesPage />;
      eleLabel = "tables"
      break;
    case "6":
      ele = <LibraryPage />;
      eleLabel = "library"
      break;
    case "7":
      ele = <PricingPage />;
      eleLabel = "pricing"
      break;
    case "8":
      ele = <ToolsPage />;
      eleLabel = "tools"
      break;
    case "9":
      ele = <HomebrewsPage />;
      eleLabel = "homebrews"
      break;
    case "10":
      ele = <MapOverlayPage />;
      eleLabel = "map-overlay"
      break;
    case "11":
      ele = <MapLegendPage />;
      eleLabel = "map-legend"
      break;
    case "12":
      ele = <CalendarPage />;
      eleLabel = "calendar"
      break;
    case "13":
      ele = <LanguagesPage />;
      eleLabel = "languages"
      break;
    default:
      break;
  }
  //Handles the React Suspense component for lazy-loaded pages, otherwise app will crash since it's not async.
  render(<Suspense fallback={<Skeleton active />}>{ele}</Suspense>, document.getElementById("PageContent"));

  const url = `/${eleLabel}`;
  window.history.pushState({ path: url }, "", url);
};

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
 * Gets Icon
 * @generator
 * @param pageName
 * @returns img
 */
function getIcon(pageName: string) {
  return (
    <img
      className="transition-all"
      width={20}
      src={"./Icons/SideNav/" + pageName + ".svg"}
      alt={pageName + " Icon"}
      draggable={false}
    ></img>
  );
}

/**
 * This is the main navbar, only overruled by itself > Responsive for mobile. Don't change Menu(Antd) parameters
 * @returns Navbar div>div>Image(antd)+Menu(antd)
 */
export default function Navbar() {
  const [selectedKeys, setselectedKeys] = useState<Array<string>>([]);

  return (
    <div className="bg-[#090d12] w-full inline-flex h-16">
      <div className="flex w-full">
        <Image
          src="./teothe3K.png"
          alt=" Teothe3K Icon"
          style={{
            width: "120px",
            padding: "4px",
            marginTop: "0.5rem",
          }}
          preview={false}
          onClick={() => {
            window.history.pushState({ path: "/" }, "", "/");
            setselectedKeys([]);
            render(
              <>
                <GetCrumbs path="Teothe3K" />
                <Card bordered={false} className="w-full">
                  <SimpleContent
                    contentProps={{
                      title: "Teothe3K Campaign Setting",
                      text: [
                        "Welcome to the world of Teothe, a universe of darkness and light, where planetary planes and endless possibilities intertwine. Once, the Astral Sea was reformed, and the gods favored their divinity upon the land, leading the people to prosper and thrive. Adventurers formed groups and traversed other nations, sparking cultural renaissances across history, religion, politics, and technology. The people reached such heights that they questioned the necessity of the gods themselves. With waning faith, the gods starved, and to prevent their demise, domains united. But as different philosophies collided, warped concepts merged, and the ties between planes were severed, setting the cogs of fate into motion.",
                        "During this tumultuous era, the world witnessed the catastrophic 'Corrosion of Rods', an event that saw the clash of the Underworld and Overworld forces. In the aftermath of this clash, the divine rods that once connected the Material Planes were shattered, and the remnants formed a mysterious 'Divine Curtain' that now veils the material realms.",
                        "Amidst the turmoil, the last incomprehensible Ancient artifact, which had long stood atop Teothe's desert, vanished into nothingness, leading the magic-affiliated mourn the loss of the opportunity to grasp the past's inherited knowledge.",
                        "Now, the world of Teothe stands at a crossroads of chaos and potential. The rage and confusion manifested into the very weave of reality, altering the fabric of existence itself. As a brave adventurer, you will navigate the layered planes, delve into the hidden corners of the universe, encounter diverse beings that ignore gods, time, and even reality. Secluded planes devoid of life await rediscovery, while forgotten ways between planes offer new mysteries to unravel. Embrace your destiny as you embark on an epic adventure that will leave an indelible mark on this ever-evolving universe. The corrosion of rods and the divine curtain have changed Teothe forever, and it is up to you to shape its destiny in the face of darkness and light. The fate of Teothe lies in your hands as the rage and confusion manifested into the weave... our story begins.",
                        "Will you be the harbinger of unity, seeking to reunite the gods' domains and breathe life back into faith, or will you embrace the wild currents of chaos and carve your unique path through the enigmatic realms? Delve into the annals of time, unearthing ancient knowledge to guide the people of Teothe towards magical wonders, or thread the path of logic, inventing technological marvels that defy the limits of imagination? Will you weave yourself into the tapestry of the people, embracing their hopes and dreams, or shall you embrace cunning stratagems, manipulating them all for personal gain? Face the dark corners of existence, cleansing the malevolent planes, and bringing radiant light into the shadows, or grasp dominion, seizing control to shape the fate of entire realms? Amidst these momentous choices, will you chase the elusive promises of eternity or humbly submit to the raw power of elemental forces?",
                        "Teothe awaits your decisions, and with each step, the universe reshapes in the wake of your actions, weaving a story of epic proportions that echoes through the ages.",
                      ],
                    }}
                  />
                </Card>
              </>,
              document.getElementById("PageContent")
            );
          }}
        />
        <Menu
          onClick={(e) => {
            loadPage(e);
            setselectedKeys([e.key]);
          }}
          selectedKeys={selectedKeys}
          theme="dark"
          mode="horizontal"
          style={{
            flex: "auto",
            minWidth: 0,
            fontSize: "1rem",
            userSelect: "none",
          }}
          items={[
            getItem("Common Lore", "1", getIcon("CommonLore")),
            getItem("Planes", "2", getIcon("Locations")),
            getItem("Deities", "3", getIcon("Deities")),
            getItem("Races", "4", getIcon("Races")),
            getItem("Tables", "5", getIcon("Tables")),
            getItem("Library", "6", getIcon("Library")),
            getItem("Pricing", "7", getIcon("Pricing")),
            getItem("Tools", "8", getIcon("Tools")),
            getItem("Homebrews", "9", getIcon("Homebrews")),
            getItem("Map Overlay", "10", getIcon("MapOverlay")),
            getItem("Map Legend", "11", getIcon("MapLegend")),
            getItem("Calendar", "12", getIcon("Calendar")),
            getItem("Languages", "13", getIcon("Languages")),
          ]}
        />
      </div>
    </div>
  );
}
