import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/header.css';
// import SearchResults from '../Search/Search-Stocks';


const Header : React.FC = () => {
    // State to manage whether the menu is open or closed
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
      setMenuOpen(false);
    };

    return (
      <header>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="projectFont">Keeping Stock</Link>

        {/* Hamburger menu (hidden by default)*/}
        <label htmlFor="toggle-nav" className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          <li><Link to="/signUp" onClick={closeMenu}>Signup</Link></li>
          <li><Link to="/news" onClick={closeMenu}>News</Link></li>

          {/* Search Bar inside Hamburger */}
          <li className="search-bar">
            <input type="text" placeholder="Search for a stock" />
            <button className="search-bar button" type="submit">🔍</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;
