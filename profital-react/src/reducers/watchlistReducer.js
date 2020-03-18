const initial_state = {
  tickers: []
};

const watchlistReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'FETCH_TICKERS':
      return {
        ...state,
        tickers: action.payload
      };
    case 'DELETE_TICKER':
      return {
        ...state,
        ticker: action.payload
      };
    default:
      return state;
  }
};

export default watchlistReducer;
