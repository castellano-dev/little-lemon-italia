import React from "react";
import logo from "../assets/logo-nav.png";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Menu</a>
        <a href="#">Reservations</a>
        <a href="#">Order online</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}
