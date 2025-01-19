import React, { createContext, useState, useContext } from "react";

// สร้าง Context สำหรับ Cart
const CartContext = createContext();

// Hook สำหรับการใช้งาน Cart Context
export const useCart = () => useContext(CartContext);

// Provider สำหรับครอบ Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State สำหรับเก็บข้อมูลสินค้าในตะกร้า

  // ฟังก์ชันเพิ่มสินค้าไปยังตะกร้า
  const addToCart = (number) => {
    if (!cart.includes(number)) {
      setCart([...cart, number]);
    } else {
      alert("เลขนี้ถูกเลือกไปแล้ว!");
    }
  };

  // ฟังก์ชันลบสินค้าจากตะกร้า
  const removeFromCart = (number) => {
    setCart(cart.filter((item) => item !== number));
  };

  // ส่งค่า State และฟังก์ชันไปยัง Component ที่ถูกครอบด้วย CartProvider
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
