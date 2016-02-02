import { createStore } from 'redux';
import { cats } from '../reducers/CatReducer';

export default createStore(cats);
