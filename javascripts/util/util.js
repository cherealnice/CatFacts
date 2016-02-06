import $ from 'jquery';

export let imageUrl = 'http://thecatapi.com/api/images/get?&format=xml&results_per_page=25';
export let factUrl = 'http://catfacts-api.appspot.com/api/facts?number=25';
// let localhost = 'http://cherealnice.github.io/proxy?url=';
//
// imageUrl =  localhost + imageUrl;
// factUrl = localhost + factUrl;

export const parseCats = (images, facts) => {
  return $(images).find('image').map( (i, img) =>
    ({
      id: img.children[1].innerHTML,
      url: img.children[0].innerHTML,
      fact: facts.facts[i]
    })
  ).toArray();
};

const comparator = (a, b) => {
  const diff = a.fact.length - b.fact.length;

  if (diff !== 0) {
    return diff;
  } else {
    return a.id.charCodeAt(0) - b.id.charCodeAt(0);
  }
};

export const sortCats = (cats) => {
  return [...cats].sort( (a, b) => comparator(a, b) );
};
