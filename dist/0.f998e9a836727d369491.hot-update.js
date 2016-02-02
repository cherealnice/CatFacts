webpackHotUpdate(0,{

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _constants = __webpack_require__(95);

	var _middlewareApi_actions = __webpack_require__(191);

	var _middlewareApi_actions2 = _interopRequireDefault(_middlewareApi_actions);

	var deleteCat = function deleteCat(id) {
	  return {
	    type: _constants.DELETE_CAT,
	    id: id
	  };
	};

	exports.deleteCat = deleteCat;
	var fetchCatsIfNeeded = function fetchCatsIfNeeded() {
	  return function (dispatch, getState) {
	    if (shouldFetchCats(getState())) {
	      dispatch(fetchCats());
	    }
	  };
	};

	exports.fetchCatsIfNeeded = fetchCatsIfNeeded;
	var requestCats = function requestCats() {
	  return {
	    type: _constants.REQUEST_CATS,
	    data: cats
	  };
	};

	var fetchCats = function fetchCats() {
	  return function (dispatch) {
	    dispatch(requestCats());
	    _middlewareApi_actions2['default'].fetchCats(function () {
	      dispatch(receiveCats);
	    });
	  };
	};

	var receiveCats = function receiveCats(cats) {
	  return {
	    type: _constants.RECEIVE_CATS,
	    cats: cats,
	    fetching: false
	  };
	};

	var shouldFetchCats = function shouldFetchCats(state) {
	  if (state.fetching) {
	    return false;
	  }
	  return true;
	};

/***/ }

})