webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(24);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(99);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _containersRoot = __webpack_require__(186);

	var _containersRoot2 = _interopRequireDefault(_containersRoot);

	render(_react2['default'].createElement(_containersRoot2['default'], null), document.getElementById('root'));

/***/ },

/***/ 185:
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

	var _react = __webpack_require__(24);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(34);

	var _reactRedux = __webpack_require__(55);

	var App = (function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'hi' },
	        'Hello'
	      );
	    }
	  }]);

	  return App;
	})(_react.Component);

	exports['default'] = App;

	var mapStateToProps = function mapStateToProps(state) {
	  var categorizedBookmarks = bookmarksByCategory(state.bookmarks);
	  var categories = Object.keys(categorizedBookmarks);
	  var filteredBookmarks = filterBookmarks(categorizedBookmarks, state.filters);
	  var tags = extractTagNames(state.bookmarks);

	  return Object.assign({}, state, {
	    anyActiveModals: anyTruthy(state.modals),
	    bookmarksByCategory: filteredBookmarks,
	    categories: categories,
	    tags: tags
	  });
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return { actions: (0, _redux.bindActionCreators)(actionCreators, dispatch) };
	};

	exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	module.exports = exports['default'];

/***/ },

/***/ 186:
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

	var _react = __webpack_require__(24);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(55);

	var _storeConfigureStore = __webpack_require__(98);

	var _storeConfigureStore2 = _interopRequireDefault(_storeConfigureStore);

	var _app = __webpack_require__(185);

	var _app2 = _interopRequireDefault(_app);

	var store = (0, _storeConfigureStore2['default'])({
	  cats: {},
	  fetching: false
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

/***/ }

})