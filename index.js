const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {
    res.end("<h1>Hello World!</h1>")
})

server.listen(80, '127.0.0.1', () => {
    console.log("Hello World!");
})