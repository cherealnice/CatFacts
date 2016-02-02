import { combineReducers } from 'redux';
import {
  DELETE_CAT, REQUEST_CATS, RECEIVE_CATS
} from '../constants';

import { fetchCats } from '../middleware/api_actions';

const initialState = {
  cats: [],
  fetching: false
};

const cats = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CAT:
      return Object.assign({}, state, {
        cats:
          state.cats.slice(0, action.id).concat(state.cats.slice(action.id + 1))
      });
    case REQUEST_CATS:
      return Object.assign({}, state, {
        fetching: true
      });
    case RECEIVE_CATS:
      return Object.assign({}, state, {
        cats: state.cats.concat(action.cats),
        fetching: false
      });
    default:
      return state;
  }
};

export default combineReducers({
  cats
});
