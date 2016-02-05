import {
  DELETE_CAT, RECEIVE_CATS
} from '../constants';

import { fetchCats } from '../middleware/api_actions';

const CatReducer = (state = [], action) => {
  switch (action.type) {
    case DELETE_CAT:
      return state
        .filter( cat =>
          cat.id != action.id
        );
    case RECEIVE_CATS:
      return state.concat(action.cats);
    default:
      return state;
  }
};

export default CatReducer;
