import {
  REQUEST_CATS, RECEIVE_CATS, TOGGLE_SORT
} from '../constants';

const initialState = {
  fetching: false,
  sorted: false
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
    case TOGGLE_SORT:
      return Object.assign({}, state, {
        fetching: !state.fetching
      });
    default:
      return state;
  }
};

export default FilterReducer;
