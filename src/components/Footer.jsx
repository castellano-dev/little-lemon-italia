import React from "react";
import logo from "../assets/logo-footer.png";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-categories">
        <div className="footer-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="footer-category">
          <div className="footer-category-title">Doormat Navigation</div>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Reservations</a>
            <a href="#">Order online</a>
            <a href="#">Login</a>
          </div>
        </div>
        <div className="footer-category">
          <div className="footer-category-title">Contact</div>
          <div className="footer-links">
            <a href="#">Address</a>
            <a href="#">Phone</a>
            <a href="#">Email</a>
          </div>
        </div>

        <div className="footer-category">
          <div className="footer-category-title">Social Media</div>
          <div className="footer-links">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
