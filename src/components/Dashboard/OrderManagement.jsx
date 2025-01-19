import React, { useState } from "react";
import "./OrderManagement.css"; // Add your custom styling here

const OrderManagement = () => {
  // Sample data for orders (you can replace this with real data or fetch from an API)
  const [orders] = useState([
    {
      orderId: "05sgvy5",
      store: "The Wos Cafe Mg",
      method: "Pickup",
      timeSlot: "Immediately",
      created: "Date: 11 Jul 2023, Time: 08:37 PM",
      lastStatus: "New Order",
      statusColor: "green",
    },
    {
      orderId: "mwwjmw",
      store: "Dev Test Restaurant",
      method: "Pickup",
      timeSlot: "Immediately",
      created: "Date: 12 Jun 2023, Time: 06:23 PM",
      lastStatus: "Accepted by Restaurant",
      statusColor: "orange",
    },
    {
      orderId: "g97rx5",
      store: "Dev Test Restaurant",
      method: "Delivery",
      timeSlot: "Immediately",
      created: "Date: 09 Jun 2023, Time: 03:02 PM",
      lastStatus: "New Order",
      statusColor: "green",
    },
    {
      orderId: "nwl4n5",
      store: "Dev Test Restaurant",
      method: "Delivery",
      timeSlot: "Immediately",
      created: "Date: 31 May 2023, Time: 11:53 AM",
      lastStatus: "Accepted by Restaurant",
      statusColor: "orange",
    },
    {
      orderId: "ywm875",
      store: "Dev Test Restaurant",
      method: "Delivery",
      timeSlot: "Immediately",
      created: "Date: 20 May 2023, Time: 08:53 AM",
      lastStatus: "Prepared",
      statusColor: "red",
    },
    {
      orderId: "8562mw",
      store: "The Wos Cafe Mg",
      method: "Pickup",
      timeSlot: "Immediately",
      created: "Date: 19 May 2023, Time: 08:53 AM",
      lastStatus: "Prepared",
      statusColor: "red",
    },
    {
      orderId: "35pd25",
      store: "Dev Test Restaurant",
      method: "Delivery",
      timeSlot: "Immediately",
      created: "Date: 19 May 2023, Time: 03:33 PM",
      lastStatus: "Rejected by Store",
      statusColor: "gray",
    },
    {
      orderId: "Iwi29",
      store: "Dev Test Restaurant",
      method: "Delivery",
      timeSlot: "Immediately",
      created: "Date: 19 May 2023, Time: 07:06 PM",
      lastStatus: "Accepted by Restaurant",
      statusColor: "orange",
    },
    {
      orderId: "Iwi29",
      store: "Dev Test Restaurant",
      method: "Delivery",
      timeSlot: "Immediately",
      created: "Date: 19 May 2023, Time: 07:06 PM",
      lastStatus: "Accepted by Restaurant",
      statusColor: "orange",
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
              <th>Username</th>
              <th>เลขหวยที่ซื้อ</th>
              <th>Time Slot</th>
              <th>วันที่ทำรายการซื้อ</th>
              <th>สถานนะ</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>{order.store}</td>
                <td>{order.method}</td>
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
