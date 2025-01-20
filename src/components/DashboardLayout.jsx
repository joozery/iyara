import React from "react";
import Sidebar from "./Dashboard/Navbar/Sidebar";
import "./DashboardLayout.css"; // นำเข้า CSS

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        {children} {/* แสดงเนื้อหา */}
      </div>
    </div>
  );
};

export default DashboardLayout;
