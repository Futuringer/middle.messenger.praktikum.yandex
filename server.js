const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/dist`));
const pathName = path.join(__dirname, "./dist/index.html");

app.listen(PORT, () => {
  console.log(`listening ${PORT}!`);
});

app.get("/*", (_, res) => {
  res.sendFile(pathName);
});
