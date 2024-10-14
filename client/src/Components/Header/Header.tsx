import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/header.css';

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
        <ul className="nav-links">
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
