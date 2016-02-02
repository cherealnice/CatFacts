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
	
	var imageUrl = 'http://thecatapi.com/api/images/get?&format=xml&results_per_page=25';
	exports.imageUrl = imageUrl;
	var factUrl = 'http://catfacts-api.appspot.com/api/facts?number=25';
	exports.factUrl = factUrl;
	var localhost = 'http://localhost:3000/proxy?url=';
	
	if (location.hostname === 'localhost') {
	  exports.imageUrl = imageUrl = localhost + imageUrl;
	  exports.factUrl = factUrl = localhost + factUrl;
	}
	
	var parseCats = function parseCats(images, facts) {
	  debugger;
	  return (0, _jquery2['default'])(images).find('url').toArray().map(function (img, i) {
	    return {
	      id: i,
	      url: img.innerHTML,
	      fact: facts[0][i]
	    };
	  });
	};
	exports.parseCats = parseCats;

/***/ }

})
//# sourceMappingURL=0.3ebaa552b6f14b26cf7b.hot-update.js.map