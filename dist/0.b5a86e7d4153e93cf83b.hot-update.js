webpackHotUpdate(0,{

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _constantsCatConstants = __webpack_require__(53);

	var _middlewareApiActions = __webpack_require__(54);

	var initialState = {
	  cats: [],
	  fetching: false
	};

	var cats = function cats(action) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? initialState : arguments[1];

	  switch (action.type) {
	    case _constantsCatConstants.CATS_DELETED:
	      return [state.slice(0, action.id), state.slice(action.id + 1)];
	    case _constantsCatConstants.CATS_FETCHED:
	    // return ({}.extend(fetching: true));
	    case _constantsCatConstants.CATS_ADDED:
	      return state.concat(action.cats);
	    // return (...state.concat(action.cats));
	    default:
	      return state;
	  }
	};
	exports.cats = cats;

/***/ }

})