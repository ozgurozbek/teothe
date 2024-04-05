"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  Checkbox,
  Skeleton,
  Table,
  Modal,
  Button,
  Empty,
  Input,
  Space,
} from "antd";
import { TrophyOutlined, UserOutlined } from "@ant-design/icons";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import type { ColumnsType } from "antd/es/table";
import { ColumnFilterItem } from "antd/es/table/interface";

interface AchievementType {
  key: React.Key;
  id: string;
  name: string;
  description: string;
  point: string;
  completed: boolean;
  completedBy?: string | null;
  achievers?: string[] | null;
}
interface UserPoints {
  user: string;
  totalPoints: number;
}
interface AchievementDataType {
  user: string;
  achievements: [
    {
      id: string;
      description: string;
      point: string;
      name: string;
      achievers?: string[];
    }
  ];
}

function GetAchievementsData() {
  const [userSecret, setUserSecret] = useState(""); // Secret user, bir input field ile setter çağırıp oraya key isteyeceğiz, başka bir buton da olacak update için, key'i de gönderecek67597689
  const [displayEmpty, setDisplayEmpty] = useState(true);
  const [achievementsData, setAchievementsData] = useState<
    AchievementDataType | undefined
  >();
  const [achievements, setAchievements] = useState<AchievementType[]>([]);
  const [userPointsState, setUserPointsState] = useState<UserPoints[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { height } = useWindowSize();

  useEffect(() => {
    setLoading(true); // true when fetching
    fetch(
      `https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getAchievements?key=${userSecret}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAchievementsData(data);
        setDisplayEmpty(false);
        setLoading(false); // false when fetched
      })
      .catch((error) => {
        console.log("Error on Fetcher: " + error);
        setAchievementsData(undefined); // Set achievementsData to undefined on error, idk why this was set to error. It'd break everything
        setDisplayEmpty(true);
        setLoading(false);
      });
  }, [userSecret]);

  useEffect(() => {
    if (achievementsData && achievementsData.achievements) {
      const initializedData = achievementsData.achievements
        .map((achievement, index) => ({
          ...achievement,
          key: index,
          completed:
            achievement.achievers?.includes(achievementsData.user) || false,
        }))
        .sort((a, b) => parseInt(a.id) - parseInt(b.id));

      setAchievements(initializedData);
    }
  }, [achievementsData]);

  if (loading) {
    return <Skeleton active />;
  }

  if (displayEmpty) {
    return <Empty />;
  }

  const showModal = () => {
    pointCalculator();
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const calculateUserPoints = (
    achievements: AchievementType[]
  ): UserPoints[] => {
    const userPointsMap: { [user: string]: number } = {};

    achievements.forEach(({ achievers, point }) => {
      achievers?.forEach((user) => {
        if (!userPointsMap[user]) {
          userPointsMap[user] = 0;
        }
        userPointsMap[user] += parseInt(point, 10);
      });
    });
    return Object.entries(userPointsMap).map(([user, totalPoints]) => ({
      user,
      totalPoints,
    }));
  };

  function pointCalculator() {
    if (achievements) {
      setUserPointsState(calculateUserPoints(achievements));
    }
  }

  let pointOptions: ColumnFilterItem[] = [];
  if (achievementsData && Array.isArray(achievementsData.achievements)) {
    pointOptions = Array.from(
      new Set(achievementsData.achievements.map((a) => a.point))
    ).map(
      (point): ColumnFilterItem => ({
        text: point.toString(), // Ensuring text is a string
        value: point, // Keeping value as a number is fine, but you can also use toString() if needed
      })
    );
  }
  
  const handleCompletionToggle = (key: React.Key) => {
    if (achievementsData) {
      setAchievements((prevAchievements) => {
        const achievementIndex = prevAchievements.findIndex(
          (a) => a.key === key
        );
        if (achievementIndex !== -1) {
          const newAchievements = [...prevAchievements];
          const achievement = prevAchievements[achievementIndex];
          let newAchievers = achievement.achievers
            ? [...achievement.achievers]
            : [];
          if (achievement.completed) {
            newAchievers = newAchievers.filter(
              (name) => name !== achievementsData.user
            );
          } else {
            newAchievers.push(achievementsData.user);
          }
          newAchievements[achievementIndex] = {
            ...achievement,
            achievers: newAchievers,
            completed: !achievement.completed,
          };
          return newAchievements;
        }
        return prevAchievements;
      });
    }
  };

  const columns: ColumnsType<AchievementType> = [
    {
      title: <TrophyOutlined />,
      dataIndex: "completed",
      key: "completed",
      render: (_, record) => (
        <Checkbox
          checked={record.completed}
          onChange={() => handleCompletionToggle(record.key)}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Score",
      dataIndex: "point",
      key: "point",
      sorter: (a, b) => parseInt(a.point) - parseInt(b.point),
      filters: pointOptions,
      onFilter: (value, record) => record.point.toString() === value,
    },
    {
      title: <UserOutlined />,
      dataIndex: "numberOfPeople",
      key: "numberOfPeople",
      render: (_, record) => record.achievers?.length || 0,
    },
    {
      title: "Completed By",
      dataIndex: "completedBy",
      key: "completedBy",
      render: (_, record) => record.achievers?.join(", ") || "N/A",
    },
  ];

  const userPointsColumns: ColumnsType<UserPoints> = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Total Points",
      dataIndex: "totalPoints",
      key: "totalPoints",
      sorter: (a, b) => a.totalPoints - b.totalPoints,
      defaultSortOrder: "descend",
    },
  ];

  return (
    <>
      <SimpleContent
        contentProps={{
          title: "Achievements",
          text: [
            "Displays the achievements that players can earn. Each achievement has a unique criteria and points associated with it. Your Teothe achievements have been reset. You must not alter the gameplay to gain achievements.",
          ],
        }}
      />
      {displayEmpty ? (
        <Empty />
      ) : (
        <section>
          {isModalVisible && (
            <Confetti
              width={document.getElementById("achievements")?.offsetWidth}
              height={height}
              className="z-50"
            />
          )}
          <Space size={4} wrap={true}>
            <Input
              addonBefore="User"
              placeholder="Your Secret"
              onChange={(e) => setUserSecret(e.target.value)}
            />
            <Button type="primary" onClick={showModal}>
              Show Leaderboard
            </Button>
          </Space>
          <Modal
            title="Leaderboard"
            open={isModalVisible}
            onCancel={handleCancel}
            styles={{ mask: { backdropFilter: "none" } }} //none, blur(2px)
            mask={true}
            maskClosable={true}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Ok
              </Button>,
            ]}
          >
            <Table
              dataSource={userPointsState}
              columns={userPointsColumns}
              pagination={false}
            />
          </Modal>
          <Table
            className="mt-4"
            dataSource={achievements}
            columns={columns}
            pagination={false}
            scroll={{ x: 1200 }}
          />
        </section>
      )}
    </>
  );
}

export default function AchievementsPageComponent() {
  return (
    <section>
      <GetCrumbs path={"Teothe3K, Achievements"} />
      <Card bordered={false} className="w-full">
        {GetAchievementsData()}
      </Card>
    </section>
  );
}
