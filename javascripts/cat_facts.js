import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CatReducer from '../reducers/CatReducer';
import App from './components/App';
import store from './store/store';
import { deleteCat } from './actions/CatActions';

const render = () => {
  ReactDOM.render(
    <App
      value={ store.getState() }
      onDelete={ deleteCat }
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
