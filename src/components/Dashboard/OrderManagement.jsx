import React, { useState } from "react";
import "./OrderManagement.css"; // เพิ่มการตั้งค่าของคุณที่นี่

const OrderManagement = () => {
  // ข้อมูลตัวอย่างการซื้อหวย (คุณสามารถแทนที่ข้อมูลนี้ด้วยข้อมูลจริงหรือดึงจาก API)
  const [orders] = useState([
    {
      orderId: "05sgvy5",
      lotteryNumber: "123456",
      purchaseMethod: "ผ่านแอป",
      timeSlot: "ตอนนี้",
      created: "วันที่: 11 ก.ค. 2023, เวลา: 08:37 PM",
      lastStatus: "ซื้อสำเร็จ",
      statusColor: "green",
    },
    {
      orderId: "mwwjmw",
      lotteryNumber: "654321",
      purchaseMethod: "ผ่านเว็บไซต์",
      timeSlot: "ตอนนี้",
      created: "วันที่: 12 มิ.ย. 2023, เวลา: 06:23 PM",
      lastStatus: "รอดำเนินการ",
      statusColor: "orange",
    },
    {
      orderId: "g97rx5",
      lotteryNumber: "987654",
      purchaseMethod: "ผ่านแอป",
      timeSlot: "ตอนนี้",
      created: "วันที่: 09 มิ.ย. 2023, เวลา: 03:02 PM",
      lastStatus: "ซื้อสำเร็จ",
      statusColor: "green",
    },
    {
      orderId: "nwl4n5",
      lotteryNumber: "112233",
      purchaseMethod: "ผ่านเว็บไซต์",
      timeSlot: "ตอนนี้",
      created: "วันที่: 31 พ.ค. 2023, เวลา: 11:53 AM",
      lastStatus: "ยกเลิก",
      statusColor: "red",
    },
    {
      orderId: "ywm875",
      lotteryNumber: "223344",
      purchaseMethod: "ผ่านแอป",
      timeSlot: "ตอนนี้",
      created: "วันที่: 20 พ.ค. 2023, เวลา: 08:53 AM",
      lastStatus: "ซื้อสำเร็จ",
      statusColor: "green",
    },
  ]);

  return (
    <div className="order-management-container">
      <h1>คำสั่งซื้อหวย</h1>
      <div className="order-table-container">
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>เลขหวยที่ซื้อ</th>
              <th>วิธีการซื้อ</th>
              <th>เวลา</th>
              <th>วันที่ทำรายการซื้อ</th>
              <th>สถานะ</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>{order.lotteryNumber}</td>
                <td>{order.purchaseMethod}</td>
                <td>{order.timeSlot}</td>
                <td>{order.created}</td>
                <td>
                  <span className={`status ${order.statusColor}`}>
                    {order.lastStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
