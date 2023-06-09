const path = require("path");
const express = require("express");
const app = express();

console.log(path.join(__dirname, "../dist/"));
app.use(express.static(path.join(__dirname, "../dist/")));

const server = app.listen(8081, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`浏览器输入 http://localhost:${port}`);
  // console.log(path.join(process.execPath, "../", "../dist"));
});
