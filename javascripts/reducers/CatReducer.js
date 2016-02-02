import {
  CATS_DELETED,
  CATS_FETCHED,
  CATS_ADDED
} from '../constants/CatConstants';
import { fetchCats } from '../middleware/ApiActions';

const initialState = {
  cats: [],
  fetching: false
};

export const cats = (state = initialState, action) => {
  switch (action.type) {
    case CATS_DELETED:
      return [
        state.slice(0, action.id),
        state.slice(action.id + 1)
      ];
    // case CATS_FETCHED:
      // return ({}.extend(fetching: true));
    case CATS_ADDED:
      return state.concat(action.cats);
      // return (...state.concat(action.cats));
    default:
      return state;
  }
};
