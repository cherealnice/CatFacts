webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// import 'babel-polyfill';
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(24);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(99);

	var _reactRedux = __webpack_require__(55);

	var _containersApp = __webpack_require__(96);

	var _containersApp2 = _interopRequireDefault(_containersApp);

	var _storeConfigureStore = __webpack_require__(98);

	var _storeConfigureStore2 = _interopRequireDefault(_storeConfigureStore);

	(0, _reactDom.render)(_react2['default'].createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2['default'].createElement(_containersApp2['default'], null)
	), document.getElementById('root'));

/***/ }
])