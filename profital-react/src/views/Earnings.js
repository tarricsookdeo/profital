import React, { Component } from 'react';
import EarningsList from '../components/earnings/EarningsList';
import FetchEarnings from '../components/earnings/FetchEarnings';

export class Earnings extends Component {
  render() {
    return (
      <div>
        <h1 className='ml-10 mt-10 text-3xl font-bold'>Earnings Today</h1>
        <FetchEarnings />
        <EarningsList />
      </div>
    );
  }
}

export default Earnings;
