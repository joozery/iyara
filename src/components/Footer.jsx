import React from 'react';
import './Footer.css'; // ไฟล์ CSS สำหรับ Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          © พ.ศ.2568 ไอยรา ล็อตเตอร์รี่ ออนไลน์
        </div>
        <div className="footer-center">
          แจ้งเรื่องร้องเรียน 022513565
        </div>
        <div className="footer-right">
          <a href="#privacy-policy">นโยบายความเป็นส่วนตัว</a> | <a href="#cookies-policy">นโยบายคุกกี้</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
