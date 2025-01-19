import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import LotteryResult from "./components/LotteryResult";
import Cart from "./components/Cart";
import ConfirmOrder from "./components/ConfirmOrder";
import MainDashboard from "./components/Dashboard/MainDashboard/MainDashboard";

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

  const Layout = ({ children }) => {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith("/dashboard");

    return (
      <>
        {!isDashboard && <Navbar cart={cart} />}
        <div style={{ flex: 1 }}>{children}</div>
        {!isDashboard && <Footer />}
      </>
    );
  };

  return (
    <Router>
      <Routes>
        {/* เส้นทางสำหรับ User */}
        <Route path="/" element={<Layout><HomePage addToCart={addToCart} /></Layout>} />
        <Route path="/prizes" element={<Layout><LotteryResult /></Layout>} />
        <Route path="/cart" element={<Layout><Cart cart={cart} onRemove={removeFromCart} /></Layout>} />
        <Route path="/confirm" element={<Layout><ConfirmOrder /></Layout>} />

        {/* เส้นทางสำหรับ Dashboard */}
        <Route path="/dashboard/*" element={<MainDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
