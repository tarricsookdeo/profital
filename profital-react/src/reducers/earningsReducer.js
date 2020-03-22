const initial_state = {
  earnings: []
};

const earningsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'FETCH_EARNINGS':
      return {
        ...state,
        earnings: action.payload
      };
    default:
      return state;
  }
};

export default earningsReducer;
