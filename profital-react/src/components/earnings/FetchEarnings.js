import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class FetchEarnings extends Component {
  async componentDidMount() {
    const response = await fetch(
      // `https://cloud.iexapis.com/v1/stock/market/today-earnings?token=${process.env.REACT_APP_IEX_CLOUD_PUBLIC}`
      `https://sandbox.iexapis.com/stable/stock/market/today-earnings?token=Tsk_9c3a615c10454606bf881af72b404c22`
    );
    const earnings = await response.json();
    this.props.fetchEarnings(earnings);
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchEarnings);
