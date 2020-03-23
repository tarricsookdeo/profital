import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class FetchEarnings extends Component {
  componentDidMount() {
    fetch(
      // https://cloud.iexapis.com/v1/stock/market/today-earnings?token=${process.env.REACT_APP_IEX_CLOUD_PUBLIC}
      `https://sandbox.iexapis.com/stable/stock/market/today-earnings?token=Tsk_9c3a615c10454606bf881af72b404c22`
    )
      .then(response => response.json())
      .then(earnings => this.props.fetchEarnings(earnings));

    if (this.props.earnings.length !== 0) {
      this.props.checkEarningsToday(true);
    }
  }
  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    earnings: state.earnings.earnings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEarnings: earnings => {
      dispatch({ type: 'FETCH_EARNINGS', payload: earnings });
    },
    checkEarningsToday: bool => {
      dispatch({ type: 'TOGGLE_EARNINGS_TODAY', payload: bool });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchEarnings);
