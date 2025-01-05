import React, { useState } from "react";
import qrCodeImage from "../assets/qrcode.png"; // แก้ไขเส้นทางภาพ QR Code
import "./ConfirmOrder.css";

const ConfirmOrder = () => {
  const [uploadedImage, setUploadedImage] = useState(null); // State สำหรับเก็บภาพที่อัปโหลด

  // ฟังก์ชันสำหรับจัดการเมื่อผู้ใช้อัปโหลดภาพ
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // เลือกไฟล์ภาพจาก input
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result); // เก็บข้อมูลภาพที่อ่านได้ใน State
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="confirm-order-container">
      <h2>ยืนยันรายการ</h2>
      <p>โปรดสแกน QR Code ด้านล่างเพื่อแอดไลน์และดำเนินการโอนเงิน</p>
      <div className="qr-code-container">
        <img src={qrCodeImage} alt="QR Code" className="qr-code" />
      </div>
      <p>หากดำเนินการโอนเงินเรียบร้อยแล้ว กรุณาติดต่อแอดมินผ่านไลน์</p>

      {/* ฟังก์ชันการอัปโหลดภาพ */}
      <div className="upload-container">
        <h3>อัปโหลดหลักฐานการโอนเงิน</h3>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="upload-input"
        />
        {uploadedImage && (
          <div className="uploaded-image-container">
            <h4>ภาพที่คุณอัปโหลด:</h4>
            <img src={uploadedImage} alt="Uploaded Proof" className="uploaded-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmOrder;
