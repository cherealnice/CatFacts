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

	var addCats = function addCats(cats) {
	  return {
	    type: _constants.ADD_CATS,
	    data: cats
	  };
	};

	var deleteCat = function deleteCat(id) {
	  return {
	    type: _constants.DELETE_CAT,
	    id: id
	  };
	};

	exports.deleteCat = deleteCat;
	var fetchPostsIfNeeded = function fetchPostsIfNeeded() {
	  return function (dispatch, getState) {
	    if (shouldFetchCats(getState())) {
	      dispatch(fetchCats());
	    }
	  };
	};

	exports.fetchPostsIfNeeded = fetchPostsIfNeeded;
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
	    type: RECEIVE_POSTS,
	    cats: cats,
	    posts: json.data.children.map(function (child) {
	      return child.data;
	    }),
	    receivedAt: Date.now()
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