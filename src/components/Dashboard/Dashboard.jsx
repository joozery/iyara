import React from "react";
import Navbar from "./Navbar/Sidebar"; // นำเข้า Navbar
import MainDashboard from "./MainDashboard/MainDashboard"; // นำเข้า MainDashboard
import "./dashboard.css"; // ถ้ามี CSS สำหรับไฟล์นี้

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Navbar />
        <MainDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
