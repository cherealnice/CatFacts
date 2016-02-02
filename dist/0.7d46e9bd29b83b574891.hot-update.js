webpackHotUpdate(0,{

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
	  debugger;
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