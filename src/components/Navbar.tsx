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
    case "quest-idea":
      return "14";
    case "quick-npc":
      return "15";
    case "achievements":
      return "16";
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
            alt=" Teothe Icon"
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
            getItem("Common Lore", "1", "common-lore", getIcon("CommonLore")),
            getItem("Deities", "3", "deities", getIcon("Deities")),
            getItem("Races", "4", "races", getIcon("Races")),
            getItem("Library", "6", "library", getIcon("Library")),
            getItem("Tools", "8", "tools", getIcon("Tools")),
            getItem("Map Overlay", "10", "map-overlay", getIcon("MapOverlay")),
            getItem("Calendar", "12", "calendar", getIcon("Calendar")),
            getItem("Achievements", "16","achievements",getIcon("Achievements")),
            getItem("DM's Works", "-2", undefined, getIcon("DMworks"), undefined, [ //undefined for href & Element
              getItem("Planes", "2", "planes", getIcon("Locations")),
              getItem("Tables", "5", "tables", getIcon("Tables")),
              getItem("Pricing", "7", "pricing", getIcon("Pricing")),
              getItem("Homebrews", "9", "homebrews", getIcon("Homebrews")),
              getItem("Map Legend", "11", "map-legend", getIcon("MapLegend")),
              getItem("Languages", "13", "languages", getIcon("Languages")),
            ]),
            getItem("Generators", "-1", undefined, getIcon("Generators"), undefined, [ //undefined for href & Element
              getItem("Quest Idea", "14", "generators/quest-idea", getIcon("QuickIdea")), //undefined for Icon
              getItem("Quick NPC", "15", "generators/quick-npc", getIcon("QuickNPC")), //undefined for Icon
            ]),
          ]}
        />
      </div>
    </div>
  );
}
