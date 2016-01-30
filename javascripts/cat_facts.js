require('es6-promise').polyfill();
require('isomorphic-fetch');
//
// function ApiService($http) {
//     this.$http = $http;
//     this.url = "/space/";
// }







$.ajax({
  url: 'http://thecatapi.com/api/images/get?&format=xml&results_per_page=25',
  type: 'GET',
  dataType: 'xml',
  success: function(data) { console.log('success' + data); },
  error: function(e) { console.log('error' + e); },
  crossDomain: true });
// fetch('http://thecatapi.com/api/images/get?&format=xml&results_per_page=25')
//     .then(function(response) {
//         if (response.status >= 400) {
//             throw new Error("Bad response from server");
//         }
//         return response;
//     })
//     .then(function(cats) {
//         console.log(cats);
//     });
