import {
  CATS_DELETED,
  CATS_FETCHED,
  CATS_ADDED
} from '../constants/CatConstants';
import store from '../store/store';

export const fetchCats = () => {
  store.dispatch({
    type: FETCH_CATS
  });
};

export const addCats = (cats) => {
  store.dispatch({
    type: CATS_ADDED,
    data: cats
  });
};

export const deleteCat = (id) => {
  store.dispatch({
    type: CAT_DELETED,
    id: id
  });
};
