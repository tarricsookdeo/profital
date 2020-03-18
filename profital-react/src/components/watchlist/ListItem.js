import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListItem extends Component {
  onClick = e => {
    e.preventDefault();
    fetch(`http://localhost:3001/companies/${this.props.key}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(
        fetch('http://localhost:3001/companies')
          .then(response => response.json())
          .then()
      );
  };

  render() {
    return (
      <div className='max-w-lg rounded overflow-hidden shadow-lg ml-40 mt-20'>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>
            {this.props.ticker} -{' '}
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

const mapDispatchToProps = dispatch => {
  return {
    deleteTicker: id => {
      dispatch({ type: 'DELETE_TICKER', payload: id });
    }
  };
};

export default connect(null, mapDispatchToProps)(ListItem);
