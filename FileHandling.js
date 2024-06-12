const fs = require('fs');
// fs.writeFileSync('./test.txt',"Hey there ....");
// fs.writeFile('./test.txt',"Hello world Async",(err)=>{});
const result = fs.readFileSync("./test.txt", "utf-8");
console.log(result);
const timeNow = new Date();
fs.appendFileSync("./test.txt", `\n Hey JS Developer ${timeNow}`); //}}`)
fs.mkdirSync("my-docss/a/b", { recursive: true });








