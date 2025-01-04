import React from "react";
import { FaTachometerAlt, FaUserFriends, FaListAlt, FaShoppingCart, FaUserTie, FaChartLine, FaSignOutAlt } from "react-icons/fa";
import "./sidebar.css";
import logoadmin from "../../assets/logored.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logoadmin} alt="Brand Logo" className="brand-logo" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <FaTachometerAlt className="menu-icon" /> {/* ไอคอน Dashboard */}
          <span>ระบบจัดการ</span>
        </li>
        <li>
          <FaUserFriends className="menu-icon" /> {/* ไอคอน ลูกค้า */}
          <span>จัดการลูกค้า</span>
        </li>
        <li>
          <FaListAlt className="menu-icon" /> {/* ไอคอน รายการหวย */}
          <span>รายการหวย</span>
        </li>
        <li>
          <FaShoppingCart className="menu-icon" /> {/* ไอคอน รายการสั่งซื้อ */}
          <span>รายการสั่งซื้อ</span>
        </li>
        <li>
          <FaUserTie className="menu-icon" /> {/* ไอคอน สมาชิกตัวแทน */}
          <span>สมาชิกตัวแทน</span>
        </li>
        <li>
          <FaChartLine className="menu-icon" /> {/* ไอคอน สรุปรายการ */}
          <span>สรุปรายการ</span>
        </li>
        <li>
          <FaSignOutAlt className="menu-icon" /> {/* ไอคอน ออกจากระบบ */}
          <span>ออกจากระบบ</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
