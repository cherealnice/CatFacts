let url = 'http://thecatapi.com/api/images/get?&format=xml&results_per_page=25';

if (this.location.hostName === 'localhost') {
  url = 'http://localhost:3000/proxy?url=' + url;
}

$.ajax({
  url: url,
  type: 'GET',
  dataType: 'xml',
  success: function(data) {
    console.log(data);
  },
  error: function(e) {
    console.log('error' + e);
  }
});
