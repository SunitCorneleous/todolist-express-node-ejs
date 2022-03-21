const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var date = new Date();
  var today = date.getDate();
  var day = "";

  if (today === 0 || today === 6) {
    day = "Weekend";
  } else {
    day = "Not Weekend";
  }
  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});
