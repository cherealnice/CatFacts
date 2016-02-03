import { combineReducers } from 'redux';
import CatReducer from './cat_reducer';
import FilterReducer from './filter_reducer';

export default combineReducers({
  cats: CatReducer,
  filters: FilterReducer
});
