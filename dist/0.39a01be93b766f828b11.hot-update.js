webpackHotUpdate(0,{

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _constants = __webpack_require__(55);
	
	var _middlewareApi_actions = __webpack_require__(56);
	
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
	    type: _constants.REQUEST_CATS
	  };
	};
	
	var fetchCats = function fetchCats() {
	  return function (dispatch) {
	    dispatch(requestCats());
	    _middlewareApi_actions2['default'].fetchCats((function () {
	      dispatch(receiveCats);
	    }).bind(undefined));
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
//# sourceMappingURL=0.39a01be93b766f828b11.hot-update.js.map