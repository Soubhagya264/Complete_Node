const fs = require('fs');
// fs.writeFileSync('./test.txt',"Hey there ....");
// fs.writeFile('./test.txt',"Hello world Async",(err)=>{});
const result = fs.readFileSync("./test.txt", "utf-8");
console.log(result);


