import React, { useState } from "react";
import "./UserManagement.css"; // เพิ่มการสไตล์

const UserManagement = () => {
  // ข้อมูลตัวอย่างผู้ใช้งาน (สามารถดึงข้อมูลจาก API ได้)
  const [users] = useState([
    {
      userId: "8045042",
      name: "สมชาย ใจดี",
      email: "somchai.jai@example.com",
      created: "25 ก.ค. 2023 09:33",
      status: "ใช้งาน",
    },
    {
      userId: "8023157",
      name: "มานะ สุขสันต์",
      email: "mana.suk@example.com",
      created: "19 ก.ค. 2023 09:24",
      status: "ใช้งาน",
    },
    {
      userId: "8022741",
      name: "พฤกษา ปัญญา",
      email: "praksa.panya@example.com",
      created: "19 ก.ค. 2023 06:54",
      status: "ถูกลบ",
    },
    {
      userId: "7670428",
      name: "อรอุมา แสนดี",
      email: "orauma.sandi@example.com",
      created: "8 มิ.ย. 2023 14:46",
      status: "ใช้งาน",
    },
    {
      userId: "7595956",
      name: "ชาญชัย ศรีคำ",
      email: "chanchai.srikham@example.com",
      created: "23 พ.ค. 2023 04:53",
      status: "ใช้งาน",
    },
    {
      userId: "7439147",
      name: "พิมพ์พิชา วรรณลักษณ์",
      email: "pimphicha.wan@example.com",
      created: "20 เม.ย. 2023 13:40",
      status: "ถูกยกเลิก",
    },
  ]);
  
  return (
    <div className="user-management-container">
      <h1>ระบบจัดการผู้ใช้งาน</h1>

      {/* ช่องค้นหา */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหาตามชื่อผู้ใช้, อีเมล หรือ ID"
        />
      </div>

      {/* ตารางผู้ใช้งาน */}
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ผู้ใช้</th>
              <th>ชื่อ</th>
              <th>อีเมล</th>
              <th>วันที่สมัคร</th>
              <th>สถานะ</th>
              <th>การกระทำ</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.created}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button className="action-button">...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
