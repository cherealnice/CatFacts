webpackHotUpdate(0,{

/***/ 98:
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
	
	var _react = __webpack_require__(18);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _cat_index_item = __webpack_require__(192);
	
	var _cat_index_item2 = _interopRequireDefault(_cat_index_item);
	
	var CatsIndex = (function (_Component) {
	  _inherits(CatsIndex, _Component);
	
	  function CatsIndex() {
	    _classCallCheck(this, CatsIndex);
	
	    _get(Object.getPrototypeOf(CatsIndex.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(CatsIndex, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var cats = this.props.cats.cats;
	      return _react2['default'].createElement(
	        'div',
	        { className: 'cats-index' },
	        cats.map(function (cat) {
	          return _react2['default'].createElement(_cat_index_item2['default'], {
	            cat: cat,
	            key: cat.id,
	            deleteCat: _this.props.deleteCat });
	        }),
	        _react2['default'].createElement('button', { onClick: this.props.fetchCats })
	      );
	    }
	  }]);
	
	  return CatsIndex;
	})(_react.Component);
	
	exports['default'] = CatsIndex;
	module.exports = exports['default'];

/***/ }

})
//# sourceMappingURL=0.957d433f597e67363c3d.hot-update.js.map