webpackHotUpdate(0,{

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _redux = __webpack_require__(164);

	var _constants = __webpack_require__(188);

	var _middlewareApiActions = __webpack_require__(169);

	var initialState = {
	  cats: [],
	  fetching: false
	};

	var catReducer = function catReducer(state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    case _constants.DELETE_CAT:
	      return Object.assign({}, state, {
	        cats: [state.cats.slice(0, action.id), state.cats.slice(action.id + 1)],
	        fetching: false
	      });
	    case _constants.REQUEST_CATS:
	      return Object.assign({}, state, {
	        fetching: true
	      });
	    case CATS_ADDED:
	      return Object.assign({}, state, {
	        cats: state.cats.concat(action.cats),
	        fetching: false
	      });
	    default:
	      return state;
	  }
	};

	exports['default'] = (0, _redux.combineReducers)({
	  catReducer: catReducer
	});
	module.exports = exports['default'];

/***/ }

})