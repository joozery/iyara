import React from "react";
import qrCodeImage from "../assets/qrcode.png"; // แก้ไขเส้นทางภาพ QR Code
import "./ConfirmOrder.css";

const ConfirmOrder = () => {
  return (
    <div className="confirm-order-container">
      <h2>ยืนยันรายการ</h2>
      <p>โปรดสแกน QR Code ด้านล่างเพื่อแอดไลน์และดำเนินการโอนเงิน</p>
      <div className="qr-code-container">
        <img src={qrCodeImage} alt="QR Code" className="qr-code" />
      </div>
      <p>หากดำเนินการโอนเงินเรียบร้อยแล้ว กรุณาติดต่อแอดมินผ่านไลน์</p>
    </div>
  );
};

export default ConfirmOrder;