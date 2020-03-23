import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Errors extends Component {
  render() {
    return (
      <div>
        {this.props.error !== null ? (
          <h1 className='ml-10 mt-10 text-3xl font-bold text-red-500'>
            {this.props.error}
          </h1>
        ) : (
          <Fragment></Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error.error
  };
};

export default connect(mapStateToProps)(Errors);
