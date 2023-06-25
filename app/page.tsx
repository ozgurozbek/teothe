"use client"; // This is a client component 👈🏽

import React from "react";
import { Layout } from "antd";
import Sidebar from "./components/SideNav";
import Dashboard from "../pages/PageDashboard";

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Dashboard />
    </Layout>
  );
}
