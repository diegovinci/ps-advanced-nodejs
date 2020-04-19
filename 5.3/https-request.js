const https = require('https');

// req: this request object is from the http.ClientRequest class
const req = https.get(
  'https://www.google.com',
  (res) => {
    // res: this response object is from the http.IncommingMessage class
    console.log(res.statusCode);
    console.log(res.headers);

    res.on('data', (data) => {
      console.log(data.toString());
    });
  }
);

req.on('error', (e) => console.log(e));

console.log(req.agent); // req.agent: the agent used for request is from the http.Agent class
