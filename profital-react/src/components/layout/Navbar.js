import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h3>Profital</h3>
      <ul>
        <Link to='/'>
          <li>Portfolio</li>
        </Link>
        <Link to='/trades'>
          <li>Trades</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
