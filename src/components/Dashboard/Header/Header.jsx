import React from "react";
import "./Header.css";
import { FaSearch, FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        {/* Left Content (Placeholder if needed) */}
      </div>
      <div className="header-right">
        {/* Search Icon */}
        <FaSearch className="icon" />

        {/* Language Selector */}
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_Kingdom.svg"
          alt="Language"
          className="flag-icon"
        />

        {/* Notification Icon */}
        <div className="notification">
          <FaBell className="icon" />
          <span className="notification-badge">2</span>
        </div>

        {/* User Avatar */}
        <img
          src="https://via.placeholder.com/40" /* Replace with the actual user avatar link */
          alt="User"
          className="user-avatar"
        />
      </div>
    </div>
  );
};

export default Header;
