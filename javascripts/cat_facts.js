require('es6-promise').polyfill();
require('isomorphic-fetch');
//
// function ApiService($http) {
//     this.$http = $http;
//     this.url = "/space/";
// }
//
// window.theCallback = function (data) {

// };
//
// document.addEventListener('DOMContentLoaded', run, false);
//
//
//   function run () {
//     var script = document.createElement('script');
//     script.src = 'http://thecatapi.com/api/images/get?&format=xml&results_per_page=25&callback=theCallback';
//     document.body.appendChild(script);
//
//   }

//
// <script type='application/xml' id='cats' src= 'http://thecatapi.com/api/images/get?&format=xml&results_per_page=25&callback=theCallback'>
// </script>

//
$.ajax({
  url: 'http://localhost:3000/proxy?url=http://thecatapi.com/api/images/get?&format=xml&results_per_page=25',
  type: 'GET',
  dataType: 'xml',
  success: function(data) { debugger },
  error: function(e) { console.log('error' + e); }
});
// fetch('http://localhost:3000/proxy?url=http://thecatapi.com/api/images/get?&format=xml&results_per_page=25')
//     .then(function(response) {
//         if (response.status >= 400) {
//             throw new Error("Bad response from server");
//         }
//         return response;
//     })
//     .then(function(cats) {
//       debugger;
//         console.log(cats);
//     });
