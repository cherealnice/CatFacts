let url = 'http://thecatapi.com/api/images/get?&format=xml&results_per_page=25';

if (this.location.hostName === 'localhost') {
  url = 'http://localhost:3000/proxy?url=' + url;
}

export function fetchCats () {
  return (
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'xml',
      success: function(data) {
        return(parseCats(data));
      },
      error: function(e) {
        alert('Error!' + e);
      }
    })
  );
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
