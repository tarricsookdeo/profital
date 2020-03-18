import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Tickers extends Component {
  componentDidMount() {
    fetch('http://localhost:3001/companies')
      .then(response => response.json())
      .then(tickers => this.props.fetchTickers(tickers));
  }
  render() {
    return <Fragment></Fragment>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTickers: tickers => {
      dispatch({ type: 'FETCH_TICKERS', payload: tickers });
    }
  };
};

export default connect(null, mapDispatchToProps)(Tickers);
