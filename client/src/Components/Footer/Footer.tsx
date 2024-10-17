import React from "react";
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <p className="logo-text">Copyright 2024 | Keeping Stock</p>
          <p className="keep">
            Keeping Stock is a web application that allows users to search for
            and save their favorite stocks.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
