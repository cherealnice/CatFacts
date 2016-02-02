webpackHotUpdate(0,{

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
	      return Object.assign({}, state, {
	        cats: [state.cats.slice(0, action.id), state.cats.slice(action.id + 1)],
	        fetching: false
	      });
	    case _constantsCatConstants.CATS_FETCHED:
	      return Object.assign({}, state, {
	        fetching: true
	      });
	    case _constantsCatConstants.CATS_ADDED:
	      return Object.assign({}, state, {
	        cats: state.cats.concat(action.cats),
	        fetching: false
	      });
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