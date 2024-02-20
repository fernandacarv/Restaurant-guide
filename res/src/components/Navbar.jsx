import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar">
          <div className="navbar-left">
            <div className="navbar-logo">
              <img src="logo.png" alt="Logo" />
            </div>
            <div className="navbar-title">Restaurant Guide</div>
          </div>
          <div className="navbar-right">
            <div className="navbar-search">
              <input type="text" placeholder="Search..." />
              <button>Search</button>
            </div>
            <div className="navbar-links">
              <a href="#">About</a>
            </div>
          </div>
        </nav>
      );
    };

export default NavBar;