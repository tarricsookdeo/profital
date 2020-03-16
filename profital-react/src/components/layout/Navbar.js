import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h3>Profital</h3>
      <ul>
        <Link to='/'>
          <li>Watchlist</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
