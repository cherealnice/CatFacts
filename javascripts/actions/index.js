import {
  DELETE_CAT,
  REQUEST_CATS,
  ADD_CATS
} from '../constants';

export const addCats = (cats) => {
  return {
    type: ADD_CATS,
    data: cats
  };
};

export const deleteCat = (id) => {
  return {
    type: DELETE_CAT,
    id: id
  };
};

export const fetchPostsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchCats(getState())) {
      dispatch(fetchCats());
    }
  };
};

const fetchCats = () => {
  return dispatch => {
    dispatch(requestCats());
    ApiActions.fetchCats(() => { dispatch(receiveCats); });
  };
};

const receiveCats = (cats) => {
  return {
    type: RECEIVE_POSTS,
    cats: cats,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
};

const shouldFetchCats = (state) => {
  if (state.fetching) {
    return false;
  }
  return true;
};
