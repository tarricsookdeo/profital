import React, { Component } from 'react';
import { connect } from 'react-redux';

class TickerForm extends Component {
  onSubmit = e => {
    e.preventDefault();
    let text = this.props.tickerText;

    const data = {
      ticker: text
    };

    if (text !== '') {
      fetch('http://localhost:3001/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            throw Error(response.status);
          } else {
            response.json();
          }
        })
        .then(data => {
          fetch('http://localhost:3001/companies')
            .then(response => response.json())
            .then(tickers => {
              this.props.newTickers(tickers);
              this.props.updateError(null);
            });
        })
        .catch(error => {
          console.log(error);
          this.props.updateError('Ticker symbol already in watchlist');
        });
    }
  };

  onChange = e => this.props.updateTickerText(e.target.value);

  render() {
    return (
      <form onSubmit={this.onSubmit} className='mt-5'>
        <div className='flex flex-row'>
          <input
            className='border-2 ml-40 pl-5 pr-40'
            type='text'
            placeholder='Enter a ticker to add to watchlist...'
            value={this.props.tickerText}
            onChange={this.onChange}
          />
          <button className='text-white bg-green-500 py-2 px-10' type='submit'>
            Add To Watchlist
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickerText: state.watchlist.tickerAddText,
    tickers: state.watchlist.tickers,
    error: state.error.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTickers: tickers => {
      dispatch({ type: 'FETCH_TICKERS', payload: tickers });
    },
    updateTickerText: text => {
      dispatch({ type: 'UPDATE_TEXT', payload: text });
    },
    newTickers: tickers => {
      dispatch({ type: 'NEW_TICKERS', payload: tickers });
    },
    updateError: error => {
      dispatch({ type: 'UPDATE_ERROR', payload: error });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerForm);
