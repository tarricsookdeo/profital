import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-blue-700 h-12'>
      <div className='flex flex-row'>
        <h1 className='text-white font-bold tracking-widest text-xl mt-2 ml-20'>
          PROFITAL
        </h1>
        <Link
          to='/'
          className='text-white mt-3 ml-auto mr-20 hover:text-purple-500'
        >
          My Watchlist
        </Link>
        <Link
          to='/search'
          className='text-white mt-3 mr-20 hover:text-purple-500'
        >
          Search
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
