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
    default:
      return state;
  }
};
