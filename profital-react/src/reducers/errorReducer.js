const initial_state = {
  error: ''
};

const errorReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'UPDATE_ERRORS':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default errorReducer;
