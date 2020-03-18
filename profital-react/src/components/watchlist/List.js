import React, { Component } from 'react';
import ListItem from './ListItem';
import Tickers from './Tickers'
import { connect } from 'react-redux';

class List extends Component {
  render() {
    const watchlist = this.props.tickers.map(ticker => (
      <ListItem key={ticker.id} ticker={ticker.ticker} />
    ));

    return (
      <div>
        <Tickers />
        {watchlist}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickers: state.watchlist.tickers
  };
};

export default connect(mapStateToProps)(List);
