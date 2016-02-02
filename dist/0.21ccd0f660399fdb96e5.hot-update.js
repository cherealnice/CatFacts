webpackHotUpdate(0,{

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.fetchCats = fetchCats;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(190);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var url = 'http://thecatapi.com/api/images/get?&format=xml&results_per_page=25';
	
	if (location.hostname === 'localhost') {
	  url = 'http://localhost:3000/proxy?url=' + url;
	}
	
	function fetchCats(callback) {
	  return _jquery2['default'].ajax({
	    url: url,
	    type: 'GET',
	    dataType: 'xml',
	    success: function success(data) {
	      return parseCats(data);
	    },
	    error: function error(e) {
	      alert('Error!' + e);
	    }
	  });
	}
	
	function parseCats(data) {
	  return (0, _jquery2['default'])(data).find('url').map(function (i, img) {
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
//# sourceMappingURL=0.21ccd0f660399fdb96e5.hot-update.js.map