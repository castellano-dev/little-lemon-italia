import React from "react";
import "../styles/Highlights.css";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";

export default function Highlights() {
  return (
    <div>
      <h1>Specials</h1>
      <section className="highlight">
        <div className="highlight-item">
          <img src={dish1} alt="Highlight 1" />
          <h3>Pizza</h3>
          <p className="description">
            Discover the unique flavors of our special Pizza. Prepared with care
            and creativity.
          </p>
          <p className="price">$15.99</p>
        </div>
        <div className="highlight-item">
          <img src={dish2} alt="Highlight 2" />
          <h3>Pasta</h3>
          <p className="description">
            Indulge in the exquisite taste of our special Pasta. A culinary
            masterpiece.
          </p>
          <p className="price">$18.99</p>
        </div>
        <div className="highlight-item">
          <img src={dish3} alt="Highlight 3" />
          <h3>Bruschetta</h3>
          <p className="description">
            Savor the rich flavors of our special Bruschetta. An unforgettable
            dining experience.
          </p>
          <p className="price">$22.99</p>
        </div>
      </section>

      {/* Weitere Abschnitte hier einfügen */}
    </div>
  );
}
