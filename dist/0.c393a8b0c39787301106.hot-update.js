webpackHotUpdate(0,{

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = configureStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(34);

	// import thunkMiddleware from 'redux-thunk';
	// import createLogger from 'redux-logger';

	var _reducers = __webpack_require__(35);

	var _reducers2 = _interopRequireDefault(_reducers);

	function configureStore(initialState) {
	  var store = (0, _redux.createStore)(_reducers2['default'], initialState
	  // applyMiddleware(thunkMiddleware, createLogger())
	  );

	  if (true) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept(35, function () {
	      var nextRootReducer = __webpack_require__(35);
	      // store.replaceReducer(nextRootReducer);
	    });
	  }

	  return store;
	}

	module.exports = exports['default'];

/***/ }

})