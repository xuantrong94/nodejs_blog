// const express = require("express");
// const { default: configViewEngine } = require("./configs/viewEngine");
import configViewEngine from "./configs/viewEngine";
import express from "express";

require('dotenv').config()

const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
