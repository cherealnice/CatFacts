// import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import CatReducer from '../reducers/CatReducer';
// import 'todomvc-app-css/index.css';

const store = createStore(CatReducer);

render(
  <App store={store} />,
  document.getElementById('root')
);
