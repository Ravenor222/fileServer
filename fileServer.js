const express = require("express");
const app = express();
const PORT = 6666; // default port 8080


app.listen(PORT, () => {
  console.log(`Demons abound at ${PORT}!`);
});