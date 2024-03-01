"use client";
/*
achievements de ne olur ? 

achievement, descr, AchievementPuanı, How many people has it

Todo with Kutsi;
1- Make it work DONE
2- Filter DONE 
3 - User Interaction Done
4 - Make it look good, Styling?
5- Responsive design (4 ile birlikte yap)
6 - Achievemen details; Achievement üstüne tıkladığında, achievementi almak için ne yapman gerektiği yazabilir. şu anda olan texti de flavor text yaparız. 
Ya da üstüne tıkladığında achievementı alan insanlardan kısa hikayeler alınabilir (Not alkan)
7 - User Profilleri ile integration, kolay gelsin. 

*/

import React, { useState, useEffect } from "react";
import { Card, Checkbox, Skeleton, Table, Modal, Input } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import type { ColumnsType } from "antd/es/table";
import achievementsData from "./achievements.json";

import SimpleContent from "@/components/SimpleCon";

interface AchievementType {
  key: React.Key;
  id: string;
  name: string;
  description: string;
  point: string;
  completed: boolean;
  completedBy?: string | null;
  achievers: string[];
}
interface Achievement {
    achievers: string[];
    point: string;
  }
  
  interface UserPoints {
    user: string;
    totalPoints: number;
  }

//exotic ass batuhan

function GetAchievementsData() {
  const [achievements, setAchievements] = useState<AchievementType[]>([]);
  const [userPointsState, setUserPointsState] = useState<UserPoints[]>([]);
  
  const calculateUserPoints = (achievements: AchievementType[]): UserPoints[]  => {
    const userPointsMap: { [user: string]: number } = {};

    achievements.forEach(({ achievers, point }) => {
      achievers.forEach((user) => {
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
    
  useEffect(() => {
    const initializedData = achievementsData.achievements.map(
      (achievement, index) => ({
        ...achievement,
        key: index,
        completed: achievement.achievers.includes(achievementsData.user),
      })
    );
    setAchievements(initializedData);
  }, []);
  useEffect(() => {
    // Recalculate and update user points whenever achievements data changes
    setUserPointsState(calculateUserPoints(achievements));
  }, [achievements]);

  const handleCompletionToggle = (key: React.Key) => {
    const achievementIndex = achievements.findIndex((a) => a.key === key);
    if (achievementIndex !== -1) {
      const achievement = achievements[achievementIndex];
      let newAchievers = [...achievement.achievers];
      if (achievement.completed) {
        //biz silişiyoruz
        newAchievers = newAchievers.filter(
          (name) => name !== achievementsData.user
        );
      } else {
        newAchievers.push(achievementsData.user);
      }
      const updatedAchievements = [...achievements];
      updatedAchievements[achievementIndex] = {
        ...achievement,
        achievers: newAchievers,
        completed: !achievement.completed,
      };
      setAchievements(updatedAchievements);
    }
  };
  if (!achievementsData) return <Skeleton active />;

  //Filter operation ll be here I hope to god
  const pointOptions = Array.from(
    new Set(achievementsData.achievements.map((a) => a.point))
  ).map((point) => ({
    text: point,
    value: point,
  }));
  
  const columns: ColumnsType<AchievementType> = [
    {
        title: "Completed",
        dataIndex: 'completed',
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
      title: "Points",
      dataIndex: "point",
      key: "point",
      sorter: (a, b) => parseInt(a.point) - parseInt(b.point),
      filters: pointOptions,
      onFilter: (value, record) => record.point.toString() === value,
    },
    {
      title: "Number Of People",
      dataIndex: "numberOfPeople",
      key: "numberOfPeople",
      render: (_, record) => record.achievers.length,
    //   sorter: (a, b) => parseInt(a.numberOfPeople) - parseInt(b.numberOfPeople),
      // Filtering can be added similarly if needed
    },
    
    {
      title: "Completed By",
      dataIndex: "completedBy",
      key: "completedBy",
      render: (_, record) => record.achievers.join(', ') || 'N/A',
    },
  ];
  const userPointsColumns: ColumnsType<UserPoints>= [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Total Points",
      dataIndex: "totalPoints",
      key: "totalPoints",
    },
  ];

//   let dataSource = achievementsData.achievements.map((achievement, index) => ({
//     key: index,
//     name: achievement.name,
//     description: achievement.description,
//     point: achievement.point,
//     numberOfPeople: achievement.numberOfPeople,
//   }));

  return (
    <>
      <SimpleContent
        contentProps={{
          title: "Achievements",
          text: [
            "Here are the achievements that play can earn. Each achievement has its unique criteria and points associated with it.",
          ],
        }}
      />
      <Table
        className="mt-4"
        dataSource={achievements}
        columns={columns}
        pagination={false}
        scroll={{ x: 1200 }}
      />
      <Table
        className="mt-4"
        dataSource={userPointsState}
        columns={userPointsColumns}
        pagination={false}
        scroll={{ x: 800 }}
        title={() => "User Points"}
      />
    </>
  );
}

export default function AchievementsPage() {
  return (
    <section>
      <GetCrumbs path={"Teothe3K, Achievements"} />
      <Card bordered={false} className="w-full">
        {GetAchievementsData()}
      </Card>
    </section>
  );
}
