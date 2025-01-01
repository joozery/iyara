import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, onRemove }) => {
  const navigate = useNavigate();

  const calculateTotal = () => {
    const pricePerItem = 10;
    const storageFee = 0;
    const totalItems = cart.length;
    const totalPrice = totalItems * pricePerItem;
    const totalStorageFee = totalItems * storageFee;
    return {
      totalPrice,
      totalStorageFee,
      grandTotal: totalPrice + totalStorageFee,
    };
  };

  const totals = calculateTotal();

  return (
    <div className="cart-container">
      <h2>รายการลอตมินิ</h2>
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-info">
                <span className="item-number">{item}</span>
                <span className="item-quantity">1 ใบ</span>
              </div>
              <button className="remove-button" onClick={() => onRemove(item)}>
                ลบ
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>ยังไม่มีลอตเตอรี่ในตะกร้า</p>
      )}

      {cart.length > 0 && (
        <>
          <div className="cart-summary">
            <h3>ยอดรวมที่ต้องชำระ</h3>
            <p>ลอตเตอรี่จำนวน: {cart.length} ใบ</p>
            <p>ราคา: {totals.totalPrice.toFixed(2)} บาท</p>
            <p>ค่าจัดเก็บ: {totals.totalStorageFee.toFixed(2)} บาท</p>
            <h4>รวมทั้งหมด: {totals.grandTotal.toFixed(2)} บาท</h4>
          </div>
          <button
            className="confirm-button"
            onClick={() => navigate("/confirm")}
          >
            ยืนยันรายการ
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;