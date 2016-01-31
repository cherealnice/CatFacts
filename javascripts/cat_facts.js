import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import CatsIndex from './components/CatsIndex';
import app from './reducers/app';

const store = createStore(counter);
const root = document.getElementById('root');

function render() {
  ReactDOM.render(
    <CatsIndex
      images={store.getState()}
      onDelete={() => store.dispatch({ type: 'DELETE' })}
    />,
    root
  );
}

render();
store.subscribe(render);
