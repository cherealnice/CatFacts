import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configure_store';
import App from './app';

const store = configureStore({
  cats: [],
  filters: {
    fetching: false,
    sorted: false
  }
});

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
