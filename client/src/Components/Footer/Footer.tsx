import React from "react";
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">Copyright 2024 | Keeping Stock</h1>
          <p>
            Keeping Stock is a web application that allows users to search for
            and save their favorite stocks.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
