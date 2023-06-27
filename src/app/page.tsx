"use client";

import React from "react";
import { Layout } from "antd";
import Sidebar from "Comp/SideNav";
import Dashboard from "Pages/PageDashboard";

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Dashboard />
    </Layout>
  );
}
