const initial_state = {
  tickers: [],
  tickerAddText: ''
};

const watchlistReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'FETCH_TICKERS':
      return {
        ...state,
        tickers: action.payload
      };
    case 'UPDATE_TEXT':
      return {
        ...state,
        tickerAddText: action.payload
      };
    case 'NEW_TICKERS':
      return {
        ...state,
        tickerAddText: '',
        tickers: action.payload
      };
    default:
      return state;
  }
};

export default watchlistReducer;
