import React from "react";
import {
  FaTicketAlt,
  FaShoppingCart,
  FaUsers,
  FaMoneyBillWave,
  FaBox,
  FaStore,
} from "react-icons/fa";
import "./body.css";

const Body = () => {
  return (
    <div className="body">
      <div className="body-header">
        <h1>แดชบอดร์</h1>
        <input className="search-bar" type="text" placeholder="Search here" />
      </div>
      <div className="stats">
        <div className="stat-item">
          <FaTicketAlt className="stat-icon" />
          <div>
            <h3>1,504</h3>
            <p>จำนวนหวยทั้งหมด</p>
          </div>
        </div>
        <div className="stat-item">
          <FaShoppingCart className="stat-icon" />
          <div>
            <h3>80</h3>
            <p>ยอดสั่งซื้อวันนี้</p>
          </div>
        </div>
        <div className="stat-item">
          <FaUsers className="stat-icon" />
          <div>
            <h3>284</h3>
            <p>สมาชิกทั้งหมด</p>
          </div>
        </div>
        <div className="stat-item">
          <FaMoneyBillWave className="stat-icon" />
          <div>
            <h3>฿7,842</h3>
            <p>ยอดขายทั้งหมด</p>
          </div>
        </div>
      </div>
      <div className="content-section">
        {/* Recent Orders */}
        <div className="recent-orders">
          <h2>
            <FaBox className="section-icon" /> รายการออเดอร์
          </h2>
          <table>
            <thead>
              <tr>
                <th>ชื่อ</th>
                <th>ราคา</th>
                <th>สถานะชำระเงิน</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Star Refrigerator</td>
                <td>฿1200</td>
                <td>ชำระแล้ว</td>
                <td className="status delivered">จัดส่งแล้ว</td>
              </tr>
              <tr>
                <td>Dell Laptop</td>
                <td>฿150</td>
                <td>ค้างชำระ</td>
                <td className="status pending">รอดำเนินการ</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Recent Customers */}
        <div className="recent-customers">
          <h2>
            <FaStore className="section-icon" /> ยอดขายตัวแทน
          </h2>
          <ul>
            <li>
              <span>บ้านหวย1</span>
              <span>฿1200</span>
            </li>
            <li>
              <span>บ้านหวย2</span>
              <span>฿1200</span>
            </li>
            <li>
              <span>บ้านหวย3</span>
              <span>฿1200</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Body;
