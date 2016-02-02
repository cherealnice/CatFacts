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
	  return (0, _jquery2['default'])(data).find('url').toArray().map(function (img, i) {
	    return { id: i, url: img.innerHTML };
	  });
	};
	
	exports.parseCats = parseCats;
	var imageUrl = 'http://thecatapi.com/api/images/get?&format=xml&results_per_page=25';
	
	exports.imageUrl = imageUrl;
	if (location.hostname === 'localhost') {
	  url = 'http://localhost:3000/proxy?url=' + url;
	}

/***/ }

})
//# sourceMappingURL=0.2dc788ca676a5b28a52f.hot-update.js.map