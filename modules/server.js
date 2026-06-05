// const app = require("./app.js");

// app.sum(10, 20);
// app.div(40, 20);

// const { sum, div } = require("./app.js");

// sum(20, 23);
// div(40, 23);

// import addition, { div } from "./app.js";

// addition(1, 2);
// div(2, 2);

// file system
// new file
// file handling by code - fs module
// api image

// fs.writeFileSync() -> to create a new file if it not exist, if exist then write in
// fs.readFileSync() -> to read file which is already exist. - it return content written in the file.
// fs.appendFileSync() -> to add content after existing content in file.

// import fs from "fs";

// fs.writeFileSync("hello.txt", "Hello World");
// fs.appendFileSync("hello.txt", "new line");
// const data = fs.readFileSync("hello.txt", "utf-8");
// console.log(data);

// fs.writeFileSync(
//   "index.html",
//   `<html>
//         <head>
//             <title>Node JS Day 3</title>
//         </head>
//         <body>
//             <h1>Node JS</h1>
//         </body>
//     </html>`,
// );

// fs.writeFileSync("bill.pdf", "this is bill");

// import path from "path";

// console.log(path.basename(import.meta.url));

// import http from "http";

// 1. create

// const server = http.createServer((req, res) => {
//   res.writeHead(404, { "content-type": "text/plain" }); // header define
//   res.end("Hello From NODE SERVER !!"); // res send
// });
// // req - hold all data comes from client : client -> server
// // res - hold all data which send from the server. : server -> client

// // 2. start
// server.listen(3000, () => {
//   console.log("server started successfully !!");
// });

// http://localhost:3000

// import chalk from "chalk";

// console.log(chalk.green("Success!!"));
// console.log(chalk.red("Failed!!"));

// const fs = require("fs");

// prince, gaurav, vishal -

// om,sakshi -

if (err) return err; // single line return {}

if (err) throw err; // throw is equal to return

if (x == 3) {
  return 0;
}
console.log("zero");
