import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="flex justify-between items-center bg-gray-100 h-16">
        <div className="logo-container">
          <h2>logo</h2>
        </div>
        <div className="menu-container">
          <NavLink to="/" className={(isActive) => (isActive ? "active" : "default")}>
            Home
          </NavLink>
          <NavLink to="/books" className={(isActive) => (isActive ? "active" : "default")}>
            Books
          </NavLink>
          <NavLink to="/orders" className={(isActive) => (isActive ? "active" : "default")}>
            Orders
          </NavLink>
          <NavLink to="/about" className={(isActive) => (isActive ? "active" : "default")}>
            About
          </NavLink>
          <NavLink to="/contact" className={(isActive) => (isActive ? "active" : "default")}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
