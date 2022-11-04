import express from "express";

const configViewEngine = (app) => {
  app.use(express.static("./src/public"));

  //* Notice view engine is ejs
  app.set("view engine", "ejs");

  //* Notice the folder's name of the view engine, and the path from server.js
  app.set("views", "./src/views");
};

export default configViewEngine;
