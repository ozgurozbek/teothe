"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Card, Empty } from 'antd';

import SimpleContent from './components/SimpleCon';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Common Lore', '1', <DesktopOutlined />),
  getItem('Deities', '2', <DesktopOutlined />),
  getItem('Tables', '3', <PieChartOutlined />),
  getItem('Library', 'sub1', <UserOutlined />, [
    getItem('General', '4'),
    getItem('Teothe', '5'),
    getItem('Epipremnum', '6'),
    getItem('Thaum', '7'),
    getItem('Choll', '8'),
    getItem('Fiction', '9'),
  ]),
  getItem('Map Legend', '10', <FileOutlined />),
  getItem('Races', '11', <PieChartOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <img src='./teothe3K.png' alt='Teothe3K Icon' />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: '0px', }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Lore</Breadcrumb.Item>
            <Breadcrumb.Item>Deities</Breadcrumb.Item>
            <Breadcrumb.Item>Demigods</Breadcrumb.Item>
          </Breadcrumb>
          <Card bordered={false} className='w-full'>
            <SimpleContent
              contentProps={{
                image: {
                  src: 'https://ozgurozbek.github.io/dnd/Wheel3K.jpg',
                  alt: 'Planes Information Image'
                },
                text: [
                  "Beastlands: Rangers dream of it on a good night. This is pure wilderness of any environment with no rules past nature.",
                  "Arboria: Governed by pure emotion, rage and joy are everpresent.",
                  "Limbo: Most dangerous plane birthing the essence of chaos. Only strong minds can last more than a minute, and elements are randomly shuffled.",
                  "Pandemonium: Plane of madness, screaming winds tearing through tunnels exist to torment poor souls.",
                  "Abyss: Houses every nightmare imaginable and consists of endless layers with unique horrors. Some say the demon kings of the abyss occasionally venture to underdark to rampage.]",
                ],
                title: 'Overseer Planes These are located in the Astral Sea.'
              }}
            />
            <SimpleContent
              contentProps={{
                text: ["Carseri: Perfect prison. Six layers and uniquely cruel to its inhabitants."],
                title: "Carseri"
              }}
            />
          </Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
