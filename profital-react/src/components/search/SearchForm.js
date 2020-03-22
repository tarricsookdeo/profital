import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchForm extends Component {
  onSubmit = e => {
    e.preventDefault();
    if (this.props.text !== '') {
      fetch(
        `https://cloud.iexapis.com/v1/stock/${this.props.text}/quote?token=${process.env.REACT_APP_IEX_CLOUD_PUBLIC}`
      )
        .then(response => response.json())
        .then(quote => this.props.search(quote));
    }
  };

  onChange = e => this.props.updateSearchText(e.target.value);

  render() {
    return (
      <form onSubmit={this.onSubmit} className='mt-5'>
        <div className='flex flex-row'>
          <input
            className='border-2 ml-40 pl-5 pr-40'
            type='text'
            placeholder='Enter stock ticker...'
            value={this.props.text}
            onChange={this.onChange}
          />
          <button className='text-white bg-blue-500 py-2 px-10' type='submit'>
            Search
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.search.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearchText: text => {
      dispatch({ type: 'UPDATE_SEARCH_TEXT', payload: text });
    },
    search: quote => {
      dispatch({ type: 'SEARCH', payload: quote });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
