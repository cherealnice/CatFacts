import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CatReducer from './reducers/CatReducer';
import App from './components/App';
import store from './store/store';
import { deleteCat, fetchCats } from './actions/CatActions';

const render = () => {
  ReactDOM.render(
    <App
      value={ store.getState() }
      deleteCat={ deleteCat }
      fetchCats={ fetchCats }
    />,
    document.getElementById('root')
  );
};

document.addEventListener('DOMContentLoaded', function () {
  store.subscribe(render);
  render();
});
