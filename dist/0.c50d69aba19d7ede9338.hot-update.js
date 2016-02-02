webpackHotUpdate(0,{

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(19);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(55);

	var _storeConfigure_store = __webpack_require__(192);

	var _storeConfigure_store2 = _interopRequireDefault(_storeConfigure_store);

	var _app = __webpack_require__(96);

	var _app2 = _interopRequireDefault(_app);

	var store = (0, _storeConfigure_store2['default'])({
	  cats: {
	    cats: {},
	    fetching: false
	  }
	});

	var Root = (function (_Component) {
	  _inherits(Root, _Component);

	  function Root() {
	    _classCallCheck(this, Root);

	    _get(Object.getPrototypeOf(Root.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Root, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2['default'].createElement(_app2['default'], null)
	      );
	    }
	  }]);

	  return Root;
	})(_react.Component);

	exports['default'] = Root;
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
	    fetchCats(function () {
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

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = configureStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(34);

	// import thunkMiddleware from 'redux-thunk';
	// import createLogger from 'redux-logger';

	var _reducers = __webpack_require__(35);

	var _reducers2 = _interopRequireDefault(_reducers);

	function configureStore(initialState) {
	  var store = (0, _redux.createStore)(_reducers2['default'], initialState
	  // applyMiddleware(thunkMiddleware, createLogger())
	  );

	  if (true) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept(35, function () {
	      var nextRootReducer = __webpack_require__(35);
	      // store.replaceReducer(nextRootReducer);
	    });
	  }

	  return store;
	}

	module.exports = exports['default'];

/***/ }

})