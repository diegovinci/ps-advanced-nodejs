const http = require('http');

// const httpRequest = http.request({ hostname: 'www.google.com' }, res => {
//   console.log(res.statusCode);
//   console.log(res.headers);

//   res.on('data', data => {
//     console.log(data.toString());
//   })
// });
// httpRequest.on('error', err => console.log(err));
// httpRequest.end();


const httpGet = http.get('http://www.google.com', res => {
  console.log(res.statusCode);
  console.log(res.headers);

  res.on('data', data => {
    // console.log(data.toString());
  })
});
httpGet.on('error', err => console.log(err));

// Printing information about http.agent
console.log(httpGet.agent);
