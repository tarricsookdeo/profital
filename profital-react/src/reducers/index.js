import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import watchlistReducer from './watchlistReducer';
import earningsReducer from './earningsReducer'

const rootReducer = combineReducers({
  search: searchReducer,
  watchlist: watchlistReducer,
  earnings: earningsReducer
});

export default rootReducer;
