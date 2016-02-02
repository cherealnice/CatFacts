webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// import React from 'react';
	// import { render } from 'react-dom';
	// import { Provider } from 'react-redux';
	// import CatReducer from '../reducers/CatReducer';
	// import App from './components/App';
	// import store from './store/store';
	// import { deleteCat, fetchCats } from './actions/CatActions';

	// const render = () => {
	//   ReactDOM.render(
	//     <App
	//       value={ store.getState() }
	//       deleteCat={ deleteCat }
	//       fetchCats={ fetchCats }
	//     />,
	//     document.getElementById('root')
	//   );
	// };
	//
	// store.subscribe(render);
	// render();
	//
	'use strict';

	var apiActions = __webpack_require__(1);
	debugger;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.fetchCats = fetchCats;
	var url = 'http://thecatapi.com/api/images/get?&format=xml&results_per_page=25';

	if (undefined.location.hostName === 'localhost') {
	  url = 'http://localhost:3000/proxy?url=' + url;
	}

	function fetchCats() {
	  return $.ajax({
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
	  debugger;
	  // $(data).find('image').map( i, img =>
	  //   { id: i, url: img.url }
	  // )
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
])