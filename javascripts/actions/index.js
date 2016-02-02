import $ from 'jquery';
import { parseCats, imageUrl, factUrl } from '../util/util';
// import * as ApiActions from '../middleware/api_actions';
import {
  DELETE_CAT, RECEIVE_CATS, REQUEST_CATS
} from '../constants';

export const deleteCat = (id) => {
  return {
    type: DELETE_CAT,
    id: id
  };
};

export const fetchCatsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchCats(getState())) {
      dispatch(fetchCats());
    }
  };
};

const requestCats = () => {
  return {
    type: REQUEST_CATS
  };
};

const fetchCats = () => {
  return dispatch => {
    dispatch(requestCats());
    return (
      $.ajax({
        url: imageUrl,
        type: 'GET',
        dataType: 'xml'
      })
      .then(data => {
        dispatch(receiveCats(parseCats(data)));
      })
    );
  };
};

const receiveCats = (cats) => {
  return {
    type: RECEIVE_CATS,
    cats: cats,
    fetching: false
  };
};

const shouldFetchCats = (state) => {
  if (state.fetching) {
    return false;
  }
  return true;
};
