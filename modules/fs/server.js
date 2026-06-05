// fs -> file management, file create and read
const fs = require("fs");

// fs.writeFile("./modules/fs/index.html", "", (err) => {
//   if (err) throw err;
//   console.log("file created and written successfully!");
// });

fs.readFile("./modules/fs/index.html", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("-----");
  console.log(data == "");
  console.log(data);
});
