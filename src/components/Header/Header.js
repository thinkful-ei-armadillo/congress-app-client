import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return (
    <header>
      <nav className="sticky-top">
        <div className="navbar-flex">
          <h3>
            <Link to="/">Congress.io</Link>
          </h3>
        </div>
      </nav>
    </header>
  );
}

export default Header;
