webpackHotUpdate(0,{

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(190);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var parseCats = function parseCats(data) {
	  return (0, _jquery2['default'])(data).find('url').map(function (i, img) {
	    return ({ id: i, url: img.innerHTML }).makeArray();
	  });
	};
	exports.parseCats = parseCats;

/***/ }

})
//# sourceMappingURL=0.e331a1ed63c883fc642d.hot-update.js.map