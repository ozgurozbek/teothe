"use client";

import React, { useState, useEffect, useCallback, memo, useMemo } from "react";
import { Card, Checkbox, Skeleton, Table, Modal, Button, Empty } from "antd";
import { TrophyOutlined, UserOutlined } from "@ant-design/icons";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import useSWR from "swr";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import type { ColumnsType } from "antd/es/table";

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
//exotic ass batuhan
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
// USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE
function GetAchievementsData() {
  const [userSecret, setUserSecret] = useState("USE YOUR OWN SECRET, DON'T PUSH SECRET TO REMOTE"); // Secret user, bir input field ile setter çağırıp oraya key isteyeceğiz, başka bir buton da olacak update için, key'i de gönderecek
  const [displayEmpty, setDisplayEmpty] = useState(true);
  const [achievementsData, setAchievementsData] = useState<AchievementDataType | undefined>();
  const [achievements, setAchievements] = useState<AchievementType[]>([]); //Bu nerede doluyor? setter hiç çağırmamışsın
  const [userPointsState, setUserPointsState] = useState<UserPoints[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { width, height } = useWindowSize();

  /**
     * Fetcher function for API requests.
     * @param args - RequestInfo object containing information about the request.
     * @returns Promise resolving to the parsed JSON response.
     */
  useEffect(() => {
    (args: RequestInfo) => fetch(args).then((res) => res.json());

    fetch(`https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getAchievements?key=${userSecret}`)
      .then((res) => res.json())
      .then((data) => {
        setAchievementsData(data);
        setDisplayEmpty(false);
      })
      .catch((error) => {
        console.log("Error on Fetcher: "+error);
        setAchievementsData(error);
        setDisplayEmpty(true);
      });
  }, [userSecret]);

  console.log(achievementsData)

  if (displayEmpty) {
    return (
      <>
        <Empty />
      </>
    );
  }


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // const calculateUserPoints = useCallback(
  //   (achievements: AchievementType[]): UserPoints[] => {
  //     const userPointsMap: { [user: string]: number } = {};

  //     achievements.forEach(({ achievers, point }) => {
  //       achievers?.forEach((user) => {
  //         if (!userPointsMap[user]) {
  //           userPointsMap[user] = 0;
  //         }
  //         userPointsMap[user] += parseInt(point, 10);
  //       });
  //     });
  //     return Object.entries(userPointsMap).map(([user, totalPoints]) => ({
  //       user,
  //       totalPoints,
  //     }));
  //   },
  //   []
  // );

  // useEffect(() => {
  //   setUserPointsState(calculateUserPoints(achievements));
  // }, [achievements, calculateUserPoints]);

  // const pointOptions = useMemo(
  //   () =>
  //     Array.from(
  //       new Set(achievementsData?.achievements.map((a) => a.point))
  //     ).map((point) => ({
  //       text: point,
  //       value: point,
  //     })),
  //   []
  // );

  // useEffect(() => {
  //   const initializedData = achievementsData?.achievements
  //     .map((achievement, index) => ({
  //       ...achievement,
  //       key: index,
  //       completed:
  //         achievement.achievers?.includes(achievementsData.user) || false,
  //     }))
  //     .sort((a, b) => parseInt(a.id) - parseInt(b.id));

  //   setAchievements(initializedData);
  // }, []);

  // const handleCompletionToggle = useCallback((key: React.Key) => {
  //   setAchievements((prevAchievements) => {
  //     const achievementIndex = prevAchievements.findIndex((a) => a.key === key);
  //     if (achievementIndex !== -1) {
  //       const newAchievements = [...prevAchievements];
  //       const achievement = prevAchievements[achievementIndex];
  //       let newAchievers = achievement.achievers
  //         ? [...achievement.achievers]
  //         : [];
  //       if (achievement.completed) {
  //         newAchievers = newAchievers.filter(
  //           (name) => name !== achievementsData.user
  //         );
  //       } else {
  //         newAchievers.push(achievementsData.user);
  //       }
  //       newAchievements[achievementIndex] = {
  //         ...achievement,
  //         achievers: newAchievers,
  //         completed: !achievement.completed,
  //       };
  //       return newAchievements;
  //     }
  //     return prevAchievements;
  //   });
  // }, []);

  // const columns: ColumnsType<AchievementType> = [
  //   {
  //     title: <TrophyOutlined />,
  //     dataIndex: "completed",
  //     key: "completed",
  //     render: (_, record) => (
  //       <Checkbox
  //         checked={record.completed}
  //         // onChange={() => handleCompletionToggle(record.key)}
  //       />
  //     ),
  //   },
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //     sorter: (a, b) => a.name.localeCompare(b.name),
  //   },
  //   {
  //     title: "Description",
  //     dataIndex: "description",
  //     key: "description",
  //   },
  //   {
  //     title: "Score",
  //     dataIndex: "point",
  //     key: "point",
  //     sorter: (a, b) => parseInt(a.point) - parseInt(b.point),
  //     // filters: pointOptions,
  //     onFilter: (value, record) => record.point.toString() === value,
  //   },
  //   {
  //     title: <UserOutlined />,
  //     dataIndex: "numberOfPeople",
  //     key: "numberOfPeople",
  //     render: (_, record) => record.achievers?.length || 0,
  //   },

  //   {
  //     title: "Completed By",
  //     dataIndex: "completedBy",
  //     key: "completedBy",
  //     render: (_, record) => record.achievers?.join(", ") || "N/A",
  //   },
  // ];

  // const userPointsColumns: ColumnsType<UserPoints> = [
  //   {
  //     title: "User",
  //     dataIndex: "user",
  //     key: "user",
  //   },
  //   {
  //     title: "Total Points",
  //     dataIndex: "totalPoints",
  //     key: "totalPoints",
  //     sorter: (a, b) => a.totalPoints - b.totalPoints,
  //     defaultSortOrder: "descend",
  //   },
  // ];

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
          {/* <Button type="primary" onClick={showModal}>
            Show Leaderboard
          </Button> */}
          <Modal
            title="Leaderboard"
            open={isModalVisible}
            // onCancel={handleCancel}
            styles={{ mask: { backdropFilter: "none" } }} //none, blur(2px)
            mask={true}
            maskClosable={true}
            footer={[
              // <Button key="back" onClick={handleCancel}>
              //   Ok
              // </Button>,
            ]}
          >
            <Table
              dataSource={userPointsState}
              // columns={userPointsColumns}
              pagination={false}
            />
          </Modal>
          <Table
            className="mt-4"
            dataSource={achievements}
            // columns={columns}
            pagination={false}
            scroll={{ x: 1200 }}
          />
        </section>
      )}
    </>
  );
}

export default memo(function AchievementsPageComponent() {
  return (
    <section>
      <GetCrumbs path={"Teothe3K, Achievements"} />
      <Card bordered={false} className="w-full">
        {GetAchievementsData()}
      </Card>
    </section>
  );
});
