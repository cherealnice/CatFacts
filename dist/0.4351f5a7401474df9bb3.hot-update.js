webpackHotUpdate(0,{

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

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
	      return [].concat(_toConsumableArray(state.slice(0, action.id)), _toConsumableArray(state.slice(action.id + 1)));
	    case _constantsCatConstants.CATS_FETCHED:
	    // return ({}.extend(fetching: true))
	    // case CATS_ADDED:
	    //   return ...state.concat(action.cats);
	    default:
	      return state;
	  }
	};
	exports.cats = cats;

/***/ }

})