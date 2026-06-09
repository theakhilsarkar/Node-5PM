import http from "http";
import fs from "fs";

// 1. imp
// 2. create
// 3. start - listen

// req - client send
// res - server send to client
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    const html = fs.readFileSync("index.html","utf-8");
    res.end(html);
  } else if (req.url == "/students") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("This is students route !");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404, route not found !");
  }
});

server.listen(3500, () => {
  console.log("server started successfully !!");
});
