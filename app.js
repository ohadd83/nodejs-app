const http = require('http');

http.createServer((req, res) => {
  const now = new Date();
  res.end(`Hello Jenkins CI/CD lets move on and test the webhook try number 2 -port 8081 date is: - ${now}`);
}).listen(3000);
