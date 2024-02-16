"use client";

import React, { useState } from "react";
import { render } from "react-dom";
import { Menu, Image, Card } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import NextImage from "next/image"; //Because its not default I can rename my import. So good.

import GetCrumbs from "./NavigationCrumb";
import SimpleContent from "./SimpleCon";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

/**
 * Renders the page on click
 * @generator
 * @param menuItem
 * @returns React Element
 */
const loadPage = (menuItem: any) => {
  switch (menuItem.key) {
    case "1":
      return "common-lore";
    case "2":
      return "planes";
    case "3":
      return "deities";
    case "4":
      return "races";
    case "5":
      return "tables";
    case "6":
      return "library";
    case "7":
      return "pricing";
    case "8":
      return "tools";
    case "9":
      return "homebrews";
    case "10":
      return "map-overlay";
    case "11":
      return "map-legend";
    case "12":
      return "calendar";
    case "13":
      return "languages";
    default:
      return ""; //Redirects to /
  }
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
  href: string,
  icon?: React.ReactNode,
  element?: React.ReactElement,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <Link href={"/" + href}>{label}</Link>,
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
    <NextImage
      className="transition-all"
      width={20}
      height={20}
      src={"./Icons/SideNav/" + pageName + ".svg"}
      alt={pageName + " Icon"}
      draggable={false}
    ></NextImage>
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
        <Link
          href={"/"}
          onClick={() => {
            setselectedKeys([]);
          }}
        >
          <Image
            src="./teothe3K.png"
            alt=" Teothe3K Icon"
            style={{
              width: "120px",
              padding: "4px",
              marginTop: "0.5rem",
            }}
            preview={false}
          />
        </Link>
        <Menu
          onClick={(e) => {
            setselectedKeys([e.key]);
            // router.push(loadPage(e));
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
            getItem("Common Lore", "1", "common-lore", getIcon("CommonLore")),
            getItem("Planes", "2", "planes", getIcon("Locations")),
            getItem("Deities", "3", "deities", getIcon("Deities")),
            getItem("Races", "4", "races", getIcon("Races")),
            getItem("Tables", "5", "tables", getIcon("Tables")),
            getItem("Library", "6", "library", getIcon("Library")),
            getItem("Pricing", "7", "pricing", getIcon("Pricing")),
            getItem("Tools", "8", "tools", getIcon("Tools")),
            getItem("Homebrews", "9", "homebrews", getIcon("Homebrews")),
            getItem("Map Overlay", "10", "map-overlay", getIcon("MapOverlay")),
            getItem("Map Legend", "11", "map-legend", getIcon("MapLegend")),
            getItem("Calendar", "12", "calendar", getIcon("Calendar")),
            getItem("Languages", "13", "languages", getIcon("Languages")),
          ]}
        />
      </div>
    </div>
  );
}
