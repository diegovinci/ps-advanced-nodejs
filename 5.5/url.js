const url = require('url');

const urlString = 'https://www.pluralsight.com/search?q=buna';

console.log(url.parse(urlString));
console.log(url.parse(urlString, true)); // parse query string as well


const urlObject = {
  protocol: 'https',
  host: 'www.pluralsight.com',
  search: '?q=buna',
  pathname: '/search',
};

console.log(url.format(urlObject)); // concatenate url properly
