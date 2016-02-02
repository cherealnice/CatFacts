import $ from 'jquery';

export let imageUrl = 'http://thecatapi.com/api/images/get?&format=xml&results_per_page=25';
export let factUrl = 'http://catfacts-api.appspot.com/api/facts?number=25';
let localhost = 'http://localhost:3000/proxy?url=';

if (location.hostname === 'localhost') {
  imageUrl =  localhost + imageUrl;
  factUrl = localhost + factUrl;
}

export const parseCats = (images, facts) => {
  return $(images).find('url').toArray().map( (img, i) =>
    ({
       url: img.innerHTML,
       fact: facts.facts[i]
     })
  );
};
