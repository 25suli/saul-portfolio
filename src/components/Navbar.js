import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Saul Ivars Tabernero</h1>
      </div>
      <div className="navbar-right">
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/cv">CV</Link>
      </div>
    </nav>
  );
}

export default Navbar;
