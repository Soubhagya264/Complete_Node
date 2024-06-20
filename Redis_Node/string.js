const client = require("./client");

async function init() {
    await client.set("msg:3", "Hey from Nodejs");
    console.log("get data")
    const result = await client.get('msg:3');
    console.log(result);
}
init();
