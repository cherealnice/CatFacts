import {
  DELETE_CAT, RECEIVE_CATS, MOVE_CAT
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

    case MOVE_CAT:
      const upCat = state.find( cat => cat.id == action.upId );
      const downCat = state.find( cat => cat.id == action.downId );
      const upIdx = state.indexOf(upCat);
      const downIdx = state.indexOf(downCat);

      const newState = [...state];
      newState.splice(upIdx, 1);
      newState.splice(downIdx, 0, upCat);

      return newState;
    default:
      return state;
  }
};

export default CatReducer;
