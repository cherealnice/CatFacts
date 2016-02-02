import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/root';
import $ from 'jquery';

$(() => {
  var root = $('#root');
  if (root === null) return;
  ReactDOM.render(<Root />, root);
});
