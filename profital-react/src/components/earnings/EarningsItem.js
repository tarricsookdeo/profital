import React, { Component } from 'react';

class EarningsItem extends Component {
  render() {
    return (
      <div className='max-w-xl rounded overflow-hidden shadow-lg ml-40 mt-20'>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>
            <h1>
              {this.props.earning.symbol} - Number of Estimates:{' '}
              {this.props.earning.numberOfEstimates} - Analyst EPS: $
              {this.props.earning.consensusEPS}
            </h1>
            <h1>Latest Price: ${this.props.earning.quote.latestPrice}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default EarningsItem;
