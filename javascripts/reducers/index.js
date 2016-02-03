import { combineReducers } from 'redux';
import CatReducer from './cat_reducer';
import FetchingReducer from './fetching_reducer';

export default combineReducers({
  cats: CatReducer,
  fetching: FetchingReducer
});
