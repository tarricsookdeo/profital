import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-blue-700 h-12'>
      <div className='flex flex-row'>
        <h1 className='text-white font-bold tracking-widest text-xl mt-2 ml-20'>
          PROFITAL
        </h1>
        <button className='text-white mt-2 ml-auto mr-20 hover:text-purple-500'>
          My Watchlist
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
