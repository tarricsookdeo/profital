import React, { Component } from 'react';
import EarningsItem from './EarningsItem';
import { connect } from 'react-redux';

class EarningsList extends Component {
  render() {
    let earningsList;
    if (this.props.earningsToday) {
      earningsList = this.props.earnings.map(earning => (
        <EarningsItem earning={earning} />
      ));
    }
    return (
      <div>
        {this.props.earningsToday ? (
          { earningsList }
        ) : (
          <h1 className='ml-40 mt-10 text-3xl font-bold'>No earnings today</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    earnings: state.earnings.earnings,
    earningsToday: state.earnings.earningsToday
  };
};

export default connect(mapStateToProps)(EarningsList);
