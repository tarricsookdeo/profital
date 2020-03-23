import React from 'react';
import SearchForm from '../components/search/SearchForm';
import SearchResult from '../components/search/SearchResult';

const Search = () => {
  return (
    <div>
      <h1 className='ml-10 mt-10 text-3xl font-bold'>Search</h1>
      <SearchForm />
      <SearchResult />
    </div>
  );
};

export default Search;
