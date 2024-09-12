const express = require("express");

const app = express();

app.get("/student/1", function (req, res) {
  res.json([
    {
      name: "Sasha",
      age: 27,
      city: "Moscow",
    },
  ]);
});
app.get("/123", function (req, res) {
  res.json([
    {
      name: "Кирилл",
      lastname: "Мастюгин",
    },
  ]);
});
app.get("/", function (req, res) {
  res.end("hello from express");
});

const router = require("./routes");
app.use(router);

app.listen(8081);
