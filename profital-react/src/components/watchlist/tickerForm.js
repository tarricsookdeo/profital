import React, { Component } from 'react';
import { connect } from 'react-redux';

class TickerForm extends Component {
  onSubmit = e => {
    e.preventDefault();
    const tickerText = document.getElementById('tickerText');
    console.log(tickerText.value);

    const data = {
      ticker: tickerText.value
    };

    if (tickerText.value !== '') {
      fetch('http://localhost:3001/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='mt-5'>
        <div className='flex flex-row'>
          <input
            className='border-2 ml-40 pl-5 pr-40'
            type='text'
            name='text'
            id='tickerText'
            placeholder='Enter a ticker to add to watchlist...'
          />
          <button className='text-white bg-green-500 py-2 px-10' type='submit'>
            Add To Watchlist
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTickers: tickers => {
      dispatch({ type: 'FETCH_TICKERS', payload: tickers });
    }
  };
};

export default connect(null, mapDispatchToProps)(TickerForm);
