const initial_state = {
  error: null
};

const errorReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'UPDATE_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default errorReducer;
