import $ from 'jquery';

export const parseCats = (data) => {
  return $(data).find('url').map( (i, img) =>
    ({ id: i, url: img.innerHTML })
  );
};
