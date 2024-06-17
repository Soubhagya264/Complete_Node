const fs = require('fs');
const logger = (req, res, next) => {
  const now = new Date();
  const time = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`
  const method = req.method;
  const url = req.url;

  fs.appendFile('log.txt', `${time} ${method}  URL:  ${url}\n`, (
    err) => {
    if (err) throw err;
  });
  console.log(`${req.method} and URL : ${req.originalUrl}`);
  next();
};

module.exports = logger;