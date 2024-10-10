import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header : React.FC = () => {
    return (
        <header>
        <nav className="navbar">
          {/* Logo */}
          <div className="projectFont">Keeping Stock</div>
  
          {/* Hamburger menu (hidden by default)*/}
          <input type="checkbox" id="toggle-nav" />
          <label htmlFor="toggle-nav" className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </label>
  
          {/* Nav Links */}
          <ul>
            <li><Link to="../Pages/Home">Home</Link></li>
            <li><Link to="../Pages/Home">Home</Link></li>
            <li><Link to="../Pages/Login">Login</Link></li>
  
            {/* Dropdown */}
            <li className="dropdown">
              <a href="../Pages/SavedStocks.html">Saved Stocks</a>
              <ul className="dropdown-menu">
                <li><Link to="#">List One</Link></li>
                <li><Link to="#">List Two</Link></li>
                <li><Link to="#">List Three</Link></li>
              </ul>
            </li>
  
            <li><Link to="../Pages/News.html">News</Link></li>
  
            {/* Search Bar inside Hamburger */}
            <li className="search-bar">
              <input type="text" placeholder="Search for a Stock" />
              <button type="submit">🔍</button>
            </li>
          </ul>
        </nav>
      </header>
    )};

export default Header;