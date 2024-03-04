"use client";

import React, { useEffect, useState } from "react";
import { Menu, Image } from "antd";
import type { MenuProps } from "antd";
import NextImage from "next/image"; //Because its not default I can rename my import. So good.
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

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
  href: string | undefined,
  icon?: React.ReactNode,
  element?: React.ReactElement,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label: href ? <Link href={"/" + href}>{label}</Link> : label,
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
      src={"/Icons/SideNav/" + pageName + ".svg"}
      alt={pageName + " Icon"}
      draggable={false}
    ></NextImage>
  );
}

/**
   * Renders the page on click
   * @generator
   * @param menuItem
   * @returns React Element
   */
const loadPageURL = (menuItem: any) => {
  switch (menuItem) {
    case "common-lore":
      return "1";
    case "planes":
      return "2";
    case "deities":
      return "3";
    case "races":
      return "4";
    case "tables":
      return "5";
    case "library":
      return "6";
    case "pricing":
      return "7";
    case "tools":
      return "8";
    case "homebrews":
      return "9";
    case "map-overlay":
      return "10";
    case "map-legend":
      return "11";
    case "calendar":
      return "12";
    case "languages":
      return "13";
    default:
      return "0";
  }
};

/**
 * This is the main navbar, only overruled by itself > Responsive for mobile. Don't change Menu(Antd) parameters
 * @returns Navbar div>div>Image(antd)+Menu(antd)
 */
export default function Navbar() {
  const [selectedKeys, setselectedKeys] = useState<Array<string>>([]);

  useEffect(() => {
    setselectedKeys([loadPageURL(window.location.pathname.substring(1))]);
  }, []); // Empty dependency to make it run once

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
            src="/teothe3K.png"
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
            getItem("Login", "1", "login", getIcon("Login")),
            getItem("Common Lore", "2", "common-lore", getIcon("CommonLore")),
            getItem("Planes", "3", "planes", getIcon("Locations")),
            getItem("Deities", "4", "deities", getIcon("Deities")),
            getItem("Races", "5", "races", getIcon("Races")),
            getItem("Tables", "6", "tables", getIcon("Tables")),
            getItem("Library", "7", "library", getIcon("Library")),
            getItem("Pricing", "8", "pricing", getIcon("Pricing")),
            getItem("Tools", "9", "tools", getIcon("Tools")),
            getItem("Homebrews", "10", "homebrews", getIcon("Homebrews")),
            getItem("Map Overlay", "11", "map-overlay", getIcon("MapOverlay")),
            getItem("Map Legend", "12", "map-legend", getIcon("MapLegend")),
            getItem("Calendar", "13", "calendar", getIcon("Calendar")),
            getItem("Languages", "14", "languages", getIcon("Languages")),
          ]}
        />
      </div>
    </div>
  );
}
