import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/header.css';

const Header : React.FC = () => {
    // State to manage whether the menu is open or closed
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <header>
      <nav className="navbar">
        {/* Logo */}
        <div className="projectFont">Keeping Stock</div>

        {/* Hamburger menu (hidden by default)*/}
        <label htmlFor="toggle-nav" className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signUp">Signup</Link></li>
          <li><Link to="/saved-stocks">Saved Stocks</Link></li>
          <li><Link to="/news">News</Link></li>

          {/* Search Bar inside Hamburger */}
          <li className="search-bar">
            <input className="search-bar input" type="text" placeholder="Search for a Stock" />
            <button className="search-bar button" type="submit">🔍</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;
