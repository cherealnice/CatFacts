webpackHotUpdate(0,{

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _redux = __webpack_require__(34);

	var _constants = __webpack_require__(95);

	var _middlewareApi_actions = __webpack_require__(191);

	var initialState = {
	  cats: [],
	  fetching: false
	};

	var cats = function cats(state, action) {
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
	    case _constants.ADD_CATS:
	      return Object.assign({}, state, {
	        cats: state.cats.concat(action.cats),
	        fetching: false
	      });
	    default:
	      return state;
	  }
	};

	exports['default'] = (0, _redux.combineReducers)({
	  cats: cats
	});
	module.exports = exports['default'];

/***/ },

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

	exports.addCats = addCats;
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

/***/ },

/***/ 191:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.fetchCats = fetchCats;
	var url = 'http://thecatapi.com/api/images/get?&format=xml&results_per_page=25';

	if (location.hostname === 'localhost') {
	  url = 'http://localhost:3000/proxy?url=' + url;
	}

	function fetchCats() {
	  return $.ajax({
	    url: url,
	    type: 'GET',
	    dataType: 'xml',
	    success: function success(data) {
	      parseCats(data);
	    },
	    error: function error(e) {
	      alert('Error!' + e);
	    }
	  });
	}

	function parseCats(data) {
	  return $(data).find('url').map(function (i, img) {
	    return { id: i, url: img.innerHTML };
	  });
	}

	// fetch(url, {
	//   method: 'GET',
	//   headers: {
	//     'Accept': 'application/xml',
	//     'Content-Type': 'applicetion/xml'
	//   }
	// })
	// .then(response => {
	//   if (response.status >= 200 && response.status < 300) {
	//     console.log(response);
	//     dispatch(addCats(response));
	//   } else {
	//     const error = new Error(response.statusText);
	//     error.response = response;
	//     dispatch(fetchError(error));
	//     throw error;
	//   }
	// })
	// .catch(error => { console.log('request failed', error); });

/***/ }

})