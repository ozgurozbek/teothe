"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';
import { render } from 'react-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Card, Empty } from 'antd';

import CommonLorePage from './pages/PageCommonLore';
import DeitiesPage from './pages/PageDeities';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function loadPage(pageComponent) {
  render(pageComponent, document.getElementById('PageContent'));
}

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
  getItem(
    <a onClick={() => {
      loadPage(<CommonLorePage/>);
    }}>Common Lore</a>, '1', <DesktopOutlined />),
  getItem(<a onClick={() => {
    loadPage(<DeitiesPage/>);
  }}>Deities</a>, '2', <DesktopOutlined />),
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
          <Card id='PageContent' bordered={false} className='w-full'>
            <Empty/>
          </Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
