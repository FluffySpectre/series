var express = require("express");
var app = express();
const port = 3006;

app.use(express.static("public"));
app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`BS client server listening on port ${port}`);
});
