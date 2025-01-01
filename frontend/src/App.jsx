import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import LotteryResult from "./components/LotteryResult";
import Cart from "./components/Cart";
import ConfirmOrder from "./components/ConfirmOrder"; // Import หน้า ConfirmOrder

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

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/prizes" element={<LotteryResult />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} onRemove={removeFromCart} />}
        />
        <Route path="/confirm" element={<ConfirmOrder />} /> {/* เส้นทางใหม่ */}
      </Routes>
    </Router>
  );
};

export default App;