import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListItem extends Component {
  onClick = e => {
    e.preventDefault();
    fetch(`http://localhost:3001/companies/${this.props.ticker.id}`, {
      method: 'DELETE'
    })
      .then(
        fetch('http://localhost:3001/companies')
          .then(response => response.json())
          .then(tickers => this.props.fetchTickers(tickers))
      )
      .catch(error => console.log(error));

    fetch('http://localhost:3001/companies')
      .then(response => response.json())
      .then(tickers => this.props.fetchTickers(tickers));
  };

  render() {
    return (
      <div className='max-w-lg rounded overflow-hidden shadow-lg ml-40 mt-20'>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>
            {this.props.ticker.ticker} -{' '}
            <button
              className='text-white bg-red-500 py-2 px-5'
              onClick={this.onClick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickers: state.watchlist.tickers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTickers: tickers => {
      dispatch({ type: 'FETCH_TICKERS', payload: tickers });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
