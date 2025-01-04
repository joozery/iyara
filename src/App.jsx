import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import LotteryResult from "./components/LotteryResult";
import Cart from "./components/Cart";
import ConfirmOrder from "./components/ConfirmOrder";
import Dashboard from "./components/admin/Dashboard"; // Import หน้า Dashboard
import Footer from "./components/Footer"; // Import Footer

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (number) => {
    if (!cart.includes(number)) {
      setCart([...cart, number]);
    } else {
      alert("เลขนี้ถูกเลือกไปแล้ว!");
    }
  };

  const removeFromCart = (number) => {
    setCart(cart.filter((item) => item !== number));
  };

  // Component for Conditional Rendering
  const Layout = ({ children }) => {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith("/admin"); // ตรวจสอบเส้นทางที่เริ่มต้นด้วย /admin

    return (
      <>
        {!isAdmin && <Navbar cart={cart} />} {/* แสดง Navbar เฉพาะเมื่อไม่ใช่หน้า admin */}
        {children}
        <Footer /> {/* Footer จะแสดงทุกหน้า */}
      </>
    );
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/prizes" element={<LotteryResult />} />
          <Route path="/cart" element={<Cart cart={cart} onRemove={removeFromCart} />} />
          <Route path="/confirm" element={<ConfirmOrder />} />
          <Route path="/admin/*" element={<Dashboard />} /> {/* เส้นทางสำหรับหน้า Dashboard */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
