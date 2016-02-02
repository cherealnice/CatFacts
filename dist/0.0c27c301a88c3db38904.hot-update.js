webpackHotUpdate(0,{

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(190);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _utilUtil = __webpack_require__(191);
	
	// import * as ApiActions from '../middleware/api_actions';
	
	var _constants = __webpack_require__(55);
	
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
	    return _jquery2['default'].when(_jquery2['default'].ajax({
	      url: _utilUtil.imageUrl,
	      type: 'GET',
	      dataType: 'xml'
	    }), _jquery2['default'].ajax({
	      url: _utilUtil.factUrl,
	      type: 'GET',
	      dataType: 'json'
	    })).then(function (images, facts) {
	      if (images[1] === 'success' && facts[1] === 'success') {
	        dispatch(receiveCats((0, _utilUtil.parseCats)(images[0], facts[0])));
	      } else {
	        alert('Something went wrong, please try again!');
	      }
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
//# sourceMappingURL=0.0c27c301a88c3db38904.hot-update.js.map