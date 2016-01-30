webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1).polyfill();
	__webpack_require__(2);
	var $ = __webpack_require__(4);
	debugger;

	fetch('http://thecatapi.com/api/images/get?&format=xml&results_per_page=25', {
	    credentials: 'include'
	}).then(function (response) {
	    if (response.status >= 400) {
	        throw new Error("Bad response from server");
	    }
	    return response.json();
	}).then(function (cats) {
	    console.log(cats);
	});

/***/ }
])