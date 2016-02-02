webpackHotUpdate(0,{

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = configureStore;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _redux = __webpack_require__(34);
	
	var _reduxThunk = __webpack_require__(184);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(183);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducers = __webpack_require__(35);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function configureStore(initialState) {
	  var store = (0, _redux.createStore)(_reducers2['default'], initialState, (0, _redux.applyMiddleware)(_reduxThunk2['default'], (0, _reduxLogger2['default'])()));
	
	  return store;
	}
	
	module.exports = exports['default'];

/***/ }

})
//# sourceMappingURL=0.1868dca3baf652d7bde2.hot-update.js.map