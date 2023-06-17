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

import CommonLore from './tabs/commonLore';
import DeitiesInformation from './components/Deities';

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
  getItem('Tables', '2', <PieChartOutlined />),
  getItem('Library', 'sub1', <UserOutlined />, [
    getItem('General', '3'),
    getItem('Teothe', '4'),
    getItem('Epipremnum', '5'),
    getItem('Thaum', '6'),
    getItem('Choll', '7'),
    getItem('Fiction', '8'),
  ]),
  getItem('Map Legend', '9', <FileOutlined />),
  getItem('Races', '10', <PieChartOutlined />),
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
            <DeitiesInformation/>
          </Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
