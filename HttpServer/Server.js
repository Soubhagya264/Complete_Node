const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
    const timeNow = new Date();
    const log = `${timeNow}: New Req Received ,\n request-path: ${req.url}\n `;
    fs.appendFile('log.txt', log, (e, d) => {
        res.end("Hello From Server");
    })
});
myServer.listen(8000, () => console.log("Server Started"));

