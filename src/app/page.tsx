"use client";

import React from "react";
import { ConfigProvider, Layout, theme } from "antd";
import Sidebar from "Comp/SideNav";
import Dashboard from "Pages/PageDashboard";

/**
 * Main App. Sidebar will react.render the Dashboard to update.
 * @returns ConfigProvider(antd) > Layout(antd) > Sidebar, Dashboard
 */
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
