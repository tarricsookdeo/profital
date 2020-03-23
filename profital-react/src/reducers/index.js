import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import watchlistReducer from './watchlistReducer';
import earningsReducer from './earningsReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  watchlist: watchlistReducer,
  earnings: earningsReducer,
  error: errorReducer
});

export default rootReducer;
