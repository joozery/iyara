import React from 'react';
import './Popup.css';
import logo from '../assets/logored.png'; // Import โลโก้

const PopupRegister = ({ onClose }) => (
  <div className="popup-overlay">
    <div className="popup-container">
      <button className="close-button" onClick={onClose}>✖</button>
      
      {/* โลโก้ด้านบน */}
      <div className="logo-header">
        <img src={logo} alt="Logo ไอยรา136" />
      </div>

      <h2>สมัครสมาชิก</h2>

      {/* ฟอร์มกรอกข้อมูล */}
      <input type="text" placeholder="รหัสสมาชิก" />
      <input type="text" placeholder="เบอร์โทร" />
      <input type="text" placeholder="ไลน์" />
      <input type="password" placeholder="รหัสผ่าน" />

      <button className="submit-button">สมัครตัวแทน</button>
    </div>
  </div>
);

export default PopupRegister;