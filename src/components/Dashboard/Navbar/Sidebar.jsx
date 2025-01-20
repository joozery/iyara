import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlus, FaUsers, FaUserCog, FaClipboardCheck, FaShoppingCart, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import './Sidebar.css';  // ตรวจสอบเส้นทางให้ตรงกับตำแหน่งของไฟล์
import Logo from "../../../assets/full-woo-logo.webp";
import FullDashboardImage from "../../../assets/illustration-dashboard.webp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <img src={Logo} alt="Logo" className="sidebar-logo" />
      </div>

      {/* Navigation */}
      <div className="sidebar-nav">
        <ul>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <FaHome className="icon" />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/add-lottery" className="nav-link">
              <FaPlus className="icon" />
              เพิ่มรายการหวย
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/team-management" className="nav-link">
              <FaUsers className="icon" />
              ระบบแม่ทีม
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/user-management" className="nav-link">
              <FaUserCog className="icon" />
              ระบบจัดการผู้ใช้งาน
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/confirm-lottery" className="nav-link">
              <FaClipboardCheck className="icon" />
              ยืนยันรายการหวย
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/order-management" className="nav-link">
              <FaShoppingCart className="icon" />
              คำสั่งซื้อหวย
            </Link>
          </li>
        </ul>

        <h3 className="auth-pages-title">AUTH PAGES</h3>
        <ul>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
              <FaSignInAlt className="icon" />
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              <FaUserPlus className="icon" />
              Sign Up
            </Link>
          </li>
        </ul>

        {/* รูปภาพใต้ Dashboard */}
        <div className="full-dashboard-image">
          <img src={FullDashboardImage} alt="Full Dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
