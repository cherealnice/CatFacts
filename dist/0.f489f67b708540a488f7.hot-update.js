webpackHotUpdate(0,{

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _constants = __webpack_require__(55);
	
	var _utilUtil = __webpack_require__(191);
	
	var _middlewareApi_actions = __webpack_require__(56);
	
	var ApiActions = _interopRequireWildcard(_middlewareApi_actions);
	
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
	    return $.ajax({
	      url: url,
	      type: 'GET',
	      dataType: 'xml'
	    }).then(function (data) {
	      dispatch(receiveCats((0, _utilUtil.parseCats)(data)));
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
//# sourceMappingURL=0.f489f67b708540a488f7.hot-update.js.map