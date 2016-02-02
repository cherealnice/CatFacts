webpackHotUpdate(0,{

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = configureStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(164);

	// import thunkMiddleware from 'redux-thunk';
	// import createLogger from 'redux-logger';

	var _reducers = __webpack_require__(187);

	var _reducers2 = _interopRequireDefault(_reducers);

	function configureStore(initialState) {
	  var store = (0, _redux.createStore)(_reducers2['default'], initialState
	  // applyMiddleware(thunkMiddleware, createLogger())
	  );

	  if (true) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept(187, function () {
	      var nextRootReducer = __webpack_require__(187);
	      // store.replaceReducer(nextRootReducer);
	    });
	  }

	  return store;
	}

	module.exports = exports['default'];

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _redux = __webpack_require__(164);

	var _constantsCatConstants = __webpack_require__(167);

	var _middlewareApiActions = __webpack_require__(169);

	var initialState = {
	  cats: [],
	  fetching: false
	};

	var catReducer = function catReducer(state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    case _constantsCatConstants.CATS_DELETED:
	      return [state.slice(0, action.id), state.slice(action.id + 1)];
	    // case CATS_FETCHED:
	    // return ({}.extend(fetching: true));
	    case _constantsCatConstants.CATS_ADDED:
	      return state.concat(action.cats);
	    // return (...state.concat(action.cats));
	    default:
	      return state;
	  }
	};

	var rootReducer = (0, _redux.combineReducers)({
	  catReducer: catReducer
	});
	exports.rootReducer = rootReducer;

/***/ }

})