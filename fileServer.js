const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

//app.use(express.static('public'))// -> THIS CAN BE USED TO SERVE STATIC FILES FROM A FOLDER -> NOT DOWNLOADING IT THOUGH//


app.get("/", (req, res) => {
  res.send("Hello!");
});

  

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});