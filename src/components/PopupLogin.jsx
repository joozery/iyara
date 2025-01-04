import React from 'react';
import './Popup.css';
import logo from '../assets/logored.png'; // Import โลโก้

const PopupLogin = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={onClose}>✖</button>
        
        {/* Header โลโก้ */}
        <div className="logo-header">
          <img src={logo} alt="Logo" /> {/* ใช้โลโก้ที่นำเข้ามา */}
        </div>
        
        <form className="form">
          <h2>เข้าสู่ระบบ</h2>
          <input type="text" placeholder="รหัสสมาชิก" required />
          <input type="password" placeholder="รหัสผ่าน" required />
          <button type="submit" className="submit-button">เข้าสู่ระบบ</button>
        </form>
      </div>
    </div>
  );
};

export default PopupLogin;