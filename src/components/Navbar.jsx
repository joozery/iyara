import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ใช้ Link จาก react-router-dom
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo.png';
import PopupLogin from './PopupLogin';
import PopupRegister from './PopupRegister';

const Navbar = ({ cart }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* โลโก้ */}
      <div className="logo-container">
        <Link to="/"> {/* ใช้ Link สำหรับคลิกกลับหน้าแรก */}
          <img src={logo} alt="Logo ไอยรา136" className="logo" />
        </Link>
      </div>

      {/* เมนู */}
      <ul className="nav-links">
        <li>
          <Link to="/">หน้าแรก</Link> {/* ใช้ Link แทน a */}
        </li>
        <li>
          <Link to="/prizes">ตรวจรางวัล</Link> {/* ใช้ Link แทน a */}
        </li>
        <div className="nav-divider"></div>
        <li className="cart-icon">
          <Link to="/cart"> {/* ลิงก์ไปหน้า Cart */}
            <FaShoppingCart />
            {cart.length > 0 && ( // แสดงจำนวนเฉพาะเมื่อมีสินค้าในตะกร้า
              <span className="cart-count">{cart.length}</span>
            )}
          </Link>
        </li>
        <div className="nav-divider"></div>
        <li className="member-info">
          <FaUser className="user-icon" />
          <div className="member-text">
            <span className="welcome" onClick={() => setLoginOpen(true)}>
              เข้าสู่ระบบ
            </span>
            <span className="login-register" onClick={() => setRegisterOpen(true)}>
              สมัครสมาชิก
            </span>
          </div>
        </li>
      </ul>

      {/* Popup Login */}
      {isLoginOpen && <PopupLogin onClose={() => setLoginOpen(false)} />}

      {/* Popup Register */}
      {isRegisterOpen && <PopupRegister onClose={() => setRegisterOpen(false)} />}
    </nav>
  );
};

export default Navbar;