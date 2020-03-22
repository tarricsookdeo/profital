import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class SearchResult extends Component {
  render() {
    return (
      <Fragment>
        {this.props.searchBlank ? (
          <h1 className='ml-40 mt-10 text-3xl font-bold'>No search Term</h1>
        ) : (
          <div className='max-w-lg rounded overflow-hidden shadow-lg ml-40 mt-20'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>
                {this.props.result.symbol} - {this.props.result.companyName}
              </div>
              <h3>
                P/E Ratio: {this.props.result.peRatio} - Change: $
                {this.props.result.change}
              </h3>
              <h3>Latest Price: {this.props.result.latestPrice}</h3>
              <h3>
                52 Week High: {this.props.result.week52High} - 52 Week Low:{' '}
                {this.props.result.week52Low}
              </h3>
              <h3>Market Cap: ${this.props.result.marketCap}</h3>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.search.result,
    searchBlank: state.search.searchBlank
  };
};

export default connect(mapStateToProps)(SearchResult);
