const PORT = 8000;
const express = require('express');
const fs = require("fs");
const status = require("express-status-monitor");
const app = express();
app.use(status());

// create stream 


app.get((req, res) => {
    const stream = fs.createWriteStream("./sample.txt", "utf-8");
    stream.on('data', (chunk) => res.write(chunk))
    stream.on('end', () => res.end())

    
    // fs.readFile("./sample.txt", (err, data) => {
    //     res.end(data);
    // })
})