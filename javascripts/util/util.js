import $ from 'jquery';

export const parseCats = (data) => {
  return $(data).find('url').toArray().map( (img, i) =>
    ({ id: i, url: img.innerHTML })
  );
};
