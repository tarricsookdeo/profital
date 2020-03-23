import React, { Component } from 'react';
import EarningsItem from './EarningsItem';
import { connect } from 'react-redux';

class EarningsList extends Component {
  render() {
    let btoEarnings;
    let amcEarnings;
    if (
      this.props.earningsBto !== undefined &&
      this.props.earningsAmc !== undefined
    ) {
      btoEarnings = this.props.earningsBto.map(earning => (
        <EarningsItem key={earning.symbol} earning={earning} />
      ));
      amcEarnings = this.props.earningsAmc.map(earning => (
        <EarningsItem key={earning.symbol} earning={earning} />
      ));
    }
    return (
      <div>
        <h1 className='ml-40 mt-10 text-3xl font-bold'>
          Earnings Before Market Open
        </h1>
        {btoEarnings}
        <h1 className='ml-40 mt-10 text-3xl font-bold'>
          Earnings After Market Close
        </h1>
        {amcEarnings}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    earningsBto: state.earnings.earnings['bto'],
    earningsAmc: state.earnings.earnings['amc']
  };
};

export default connect(mapStateToProps)(EarningsList);
