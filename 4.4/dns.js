const dns = require('dns'); // name -- addresses

// The lookup method on the dns module does not perform any network communication, and instead uses the underlying OS facilities to perform name resolutions.
// This means that it will be using libuv threads.
dns.lookup('pluralsight.com', (err, address) => {
  console.log(address);
});

// All the other methods uses the network directly and does not use libuv threads.
dns.resolve4('pluralsight.com', (err, address) => {
  console.log(address);
});

dns.resolveMx('pluralsight.com', (err, address) => {
  console.log(address);
});

dns.reverse('35.161.75.227', (err, hostnames) => {
  console.log(hostnames);
});
