import { combineReducers } from 'redux';
import {
  DELETE_CAT, REQUEST_CATS, ADD_CATS
} from '../constants';

import { fetchCats } from '../middleware/ApiActions';

const initialState = {
  cats: [],
  fetching: false
};

const cats = (state = initialState, action) => {
  switch (action.type) {
    case CATS_DELETED:
      return Object.assign({}, state, {
        cats:
        [
          state.cats.slice(0, action.id),
          state.cats.slice(action.id + 1)
        ],
        fetching: false
      });
    case REQUEST_CATS:
      return Object.assign({}, state, {
        fetching: true
      });
    case CATS_ADDED:
      return Object.assign({}, state, {
        cats: state.cats.concat(action.cats),
        fetching: false
      });
    default:
      return state;
  }
};

export default combineReducers({
  catReducer
});
