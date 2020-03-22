const initial_state = {
  text: '',
  result: {},
  searchBlank: true
};

const searchReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        text: '',
        result: action.payload
      };
    case 'UPDATE_SEARCH_TEXT':
      return {
        ...state,
        text: action.payload
      };
    case 'UPDATE_SEARCH_BLANK':
      return {
        ...state,
        searchBlank: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
