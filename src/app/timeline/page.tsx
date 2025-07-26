"use client";

import React, { useState } from "react";
import SimpleContent from "@/components/SimpleCon";
import { Card, Skeleton, Empty, Input, Button, Space, Divider } from "antd";
import { Timeline } from "antd";
import type { TimelineProps } from "antd";
// import { Metadata } from "next";
import GetCrumbs from "@/components/NavigationCrumb";

// export const metadata: Metadata = {
//   title: "Timeline",
//   description:
//     "Have access to Teothe's expansive timeline, from eras to world-events, enhancing your story with in-world lore accuracy.",
// };

export interface TimelineDataItem {
  title: boolean;
  heading: string;
  content: string;
  date?: string;
}

export interface TimelineComponentProps {
  items: TimelineDataItem[];
}

/**
 * Renders a timeline using Ant Design's Timeline component with items prop.
 * Title entries render centered bold without a dot.
 * Regular entries show date labels on the left.
 */
const TimelineComponent: React.FC<TimelineComponentProps> = ({ items }) => {
  const timelineItems: TimelineProps["items"] = items.map((entry, idx) =>
    entry.title
      ? {
          key: idx.toString(),
          children: <div className="h-4"></div>,
          color: "white",
          dot: (
            <strong className="bg-[#630436] py-2 px-8">{entry.content}</strong>
          ),
        }
      : {
          key: idx.toString(),
          label: entry.date,
          children: (
            <div className="text-justify">
              <strong>{entry.heading}</strong>
              <br />
              {entry.content}
            </div>
          ),
          color: "white",
        }
  );

  // -48px is compensating for the unresponsive timeline calc in AntD, that's the reason for relative left movement.
  // pending and pendingDot exists to show a dotted line on the last entry to display continuum but no un-styleable icon.
  return (
    <section className="relative left-[-30%] lg:left-[-10%] lg:w-3/4 w-full">
      <Timeline pending pendingDot=<></> className="mx-[-48px]" mode="left" items={timelineItems} /> 
    </section>
  );
};

export default function TimelinePage() {
  const [secret, setSecret] = useState("");
  const [items, setItems] = useState<TimelineDataItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [displayEmpty, setDisplayEmpty] = useState(true);

  const loadTimeline = () => {
    setLoading(true);
    fetch(`https://teothe.pythonanywhere.com/getTimeline?key=${secret}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.timeline)) {
          setItems(data.timeline);
          setDisplayEmpty(data.timeline.length === 0);
        } else {
          setItems([]);
          setDisplayEmpty(true);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch timeline:", err);
        setItems([]);
        setDisplayEmpty(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section>
      <GetCrumbs path={"Teothe,Timeline"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Timeline",
            text: ["Displays the timeline that Teothe and Teothe3K DM/GMs can refer to when a Secret is entered."],
          }}
        />
        <Space size={4} wrap={true}>
          <Input
            type="Password"
            placeholder="Your Secret"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            onPressEnter={loadTimeline}
          />
          <Button onClick={loadTimeline}>
            Load Timeline
          </Button>
        </Space>
        <Divider />
        {loading ? (
          <Skeleton active />
        ) : displayEmpty ? (
          <Empty />
        ) : (
          <TimelineComponent items={items} />
        )}
      </Card>
    </section>
  );
}
