import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Navbar/navbar"; // เส้นทางนี้ตรงกับโครงสร้างโฟลเดอร์
import AddLottery from "../AddLottery";
import TeamManagement from "../TeamManagement";
import UserManagement from "../UserManagement";
import ConfirmLottery from "../Confirm";
import OrderManagement from "../OrderManagement";
import "./MainDashboard.css"; // เพิ่มการเชื่อมโยง CSS

const MainDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-dashboard">
                <h1>Welcome to Dashboard</h1>

                {/* ส่วนแสดงสถิติ */}
                <div className="stats">
                  <div className="stat-card">
                    <h2>ผู้ใช้งาน</h2>
                    <p>1,234 คน</p>
                  </div>
                  <div className="stat-card">
                    <h2>คำสั่งซื้อ</h2>
                    <p>567 รายการ</p>
                  </div>
                  <div className="stat-card">
                    <h2>รายได้</h2>
                    <p>฿45,678</p>
                  </div>
                </div>

                {/* ส่วนแสดงกราฟ */}
                <div className="charts">
                  <div className="chart">
                    <h2>ยอดขาย</h2>
                    <p>กราฟยอดขาย</p>
                  </div>
                  <div className="chart">
                    <h2>ผู้ใช้งาน</h2>
                    <p>กราฟผู้ใช้งาน</p>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/add-lottery" element={<AddLottery />} />
          <Route path="/team-management" element={<TeamManagement />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/confirm-lottery" element={<ConfirmLottery />} />
          <Route path="/order-management" element={<OrderManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainDashboard;
