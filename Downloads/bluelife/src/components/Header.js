import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <span>For Quick Enquiry, please contact now +91-7795453579</span>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.jpg" alt="BluLife Logo" />
        </div>
        <div className="nav-bar-section">

        <ul>
          <li>Domestic Water Purifiers</li>
          <li>Commercial Water Purifiers</li>
          <li>Domestic Water Purifier Spares</li>
          <li>Commercial Water Purifier Spares</li>
          <li>Others</li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
