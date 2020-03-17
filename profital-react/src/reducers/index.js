import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import watchlistReducer from './watchlistReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  watchlist: watchlistReducer
});

export default rootReducer;
