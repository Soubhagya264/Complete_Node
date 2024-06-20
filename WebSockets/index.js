const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

//handle socketIO
io.on("connection", (socket) => {
    console.log("New client connected");
    //handle incoming message
    socket.on("message", (message) => {
        console.log(`Received message => ${message}`);
        //send message to all connected clients
        io.emit("message", message);
    }
    )
}
)
app.use(express.static("/public"));
server.listen(9000, () => {
    console.log("Server is running on port 9000");
})
