"use client"
/*
achievements de ne olur ? 

achievement, descr, AchievementPuanı, How many people has it

Todo with Kutsi;
1- Make it work DONE
2- Filter DONE 
3 - User Interaction
4 - Make it look good, Styling?
5- Responsive design (4 ile birlikte yap)
6 - Achievemen details; Achievement üstüne tıkladığında, achievementi almak için ne yapman gerektiği yazabilir. şu anda olan texti de flavor text yaparız. 
Ya da üstüne tıkladığında achievementı alan insanlardan kısa hikayeler alınabilir (Not alkan)
7 - User Profilleri ile integration, kolay gelsin. 




*/

import React, { useState, useEffect} from 'react';
import { Card, Checkbox, Skeleton, Table, Modal, Input } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import type { ColumnsType } from "antd/es/table";
import achievementsData from './achievements.json';

import SimpleContent from "@/components/SimpleCon";

interface AchievementType extends AchievementDataType{
    key: React.Key;
    completed: boolean;
    completedBy?: string | null;

}
interface AchievementDataType {
  key: React.Key;
  name: string;
  description: string;
  point: string;
  numberOfPeople: string;

}


    //exotic ass batuhan

function GetAchievementsData() {
    //if (!achievementsData) return <Skeleton active/>;
    const [achievements, setAchievements] = useState<AchievementType[]>([]);
    
    useEffect(() => {
        const initializedData = achievementsData.achievements.map((achievement, index) =>({
        ...achievement,
        key:index,
        completed:false,
        completedBy:null,    
        }));
        setAchievements(initializedData);
    }, []);

    const handleCompletionToggle = (key: React.Key) => {
        const achievement = achievements.find(a => a.key === key);
        if(!achievement?.completed){
            const completedBy = prompt("Who completed this achievement?");
            if(completedBy){
                setAchievements(achievements.map(a => a.key === key ? { ...a, completed: true, completedBy} :a));
            }
        }
    }

    //Filter operation ll be here I hope to god
    const pointOptions = Array.from(new Set(achievementsData.achievements.map(a => a.point)))
    .map(point => ({
      text: point,
      value: point,
    }));
  
    const columns: ColumnsType<AchievementType> = [
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
          // Example of adding sorting to another column if needed
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
          sorter: (a, b) => parseInt(a.numberOfPeople) - parseInt(b.numberOfPeople),
          // Filtering can be added similarly if needed
        },
        {
            title: 'Completed',
            key: 'completed',
            render: (_, record) =>(
                <Checkbox
                checked={record.completed}
                onChange={() => handleCompletionToggle(record.key)}
                />
            ),
        },
        {
            title: 'Completed By',
            dataIndex: 'completedBy',
            key: 'completedBy',
            render: text=> <span>{text || 'N/A'}</span>
        },
    ];
    
 let dataSource = achievementsData.achievements.map((achievement, index) =>({
    key: index,
    name: achievement.name,
    description: achievement.description,
    point: achievement.point,
    numberOfPeople: achievement.numberOfPeople,


 }));
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
    </>
  );
}

/**
 * Component for the tools page, displaying breadcrumbs and a card containing table data.
 * @returns The tools page section with breadcrumbs and table data.
 */
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
