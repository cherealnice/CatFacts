import $ from 'jquery';
import { parseCats, imageUrl, factUrl } from '../util/util';
import {
  DELETE_CAT, RECEIVE_CATS, REQUEST_CATS, TOGGLE_SORT, MOVE_CAT
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

export const toggleSort = () => {
  return {
    type: TOGGLE_SORT,
  };
};

export const moveCat = (upId, downId) => {
  return {
    type: MOVE_CAT,
    upId: upId,
    downId: downId
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
      $.when(
        $.ajax({
          url: imageUrl,
          type: 'GET',
          dataType: 'xml'
        }),
        $.ajax({
          url: factUrl,
          type: 'GET',
          dataType: 'json'
        })
      )
      .then((images, facts) => {
        if (images[1] === 'success' && facts[1] === 'success') {
          dispatch(receiveCats(parseCats(images[0], facts[0])));
        } else {
          alert('Something went wrong, please try again!');
        }
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
