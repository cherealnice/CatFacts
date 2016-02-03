import {
  REQUEST_CATS, RECEIVE_CATS
} from '../constants';

const initialState = {
  fetching: false
};

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CATS:
      return Object.assign({}, state, {
        fetching: true
      });
    case RECEIVE_CATS:
      return Object.assign({}, state, {
        fetching: false
      });
    default:
      return state;
  }
};

export default FilterReducer;
