const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("chat message", (msg) => {
        console.log("msg");
        io.emit("chat message", msg);
    });
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});
server.listen(8080, () => {
    console.log("Connected at 8080");
});
