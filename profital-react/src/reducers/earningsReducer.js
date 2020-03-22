const initial_state = {
  earningsToday: false,
  earnings: []
};

const earningsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'FETCH_EARNINGS':
      return {
        ...state,
        earnings: action.payload
      };
    case 'TOGGLE_EARNINGS_TODAY':
      return {
        ...state,
        earningsToday: action.payload
      };
    default:
      return state;
  }
};

export default earningsReducer;
