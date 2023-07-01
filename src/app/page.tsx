"use client";

import React from "react";
import { ConfigProvider, Layout, theme } from "antd";
import Sidebar from "Comp/SideNav";
import Dashboard from "Pages/PageDashboard";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Dashboard />
      </Layout>
    </ConfigProvider>
  );
}
