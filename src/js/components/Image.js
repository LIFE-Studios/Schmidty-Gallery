/**
 * Image Component
 * - takes an options object and returns an image template
 * @param  {Object} options
 * @return {String} returns template
 */
export const Image = (image) => {
  const { title, src } = image;
  return `
  <a href="${ src }" title="${ title }">
    <img src="${ src }" alt="${ title }">
  </a>`;
};
