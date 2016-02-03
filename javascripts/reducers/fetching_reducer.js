import {
  REQUEST_CATS, RECEIVE_CATS
} from '../constants';

const FetchingReducer = (state = false, action) => {
  switch (action.type) {
    case REQUEST_CATS:
      return true;
    case RECEIVE_CATS:
      return false;
    default:
      return state;
  }
};

export default FetchingReducer;
