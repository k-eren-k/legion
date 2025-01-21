const express = require("express");
const path = require("path");
const fs = require("fs");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/music", (req, res) => {
  res.render("music");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
