const initial_state = {
  text: '',
  results: []
};

const searchReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return state;
    case 'UPDATE_SEARCH_TEXT':
      const newText = action.payload;
      return {
        ...state,
        text: newText
      };
    default:
      return state;
  }
};

export default searchReducer;
