import React, { Component } from 'react';
import List from '../components/watchlist/List';

export class Watchlist extends Component {
  render() {
    return (
      <div>
        <h1 className=' ml-10 mt-10 text-3xl font-bold'>Watchlist</h1>
        <List />
      </div>
    );
  }
}

export default Watchlist;
