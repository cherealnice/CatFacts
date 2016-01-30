require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch('http://thecatapi.com/api/images/get?format=xml&results_per_page=25')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(cats) {
        console.log(cats);
    });
