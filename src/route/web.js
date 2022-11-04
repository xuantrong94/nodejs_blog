import express from "express";
import { getHomepage, getAboutPage } from "../controller/homeController";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  // router.get("/about", (req, res) => {
  //   getAboutPage(req, res);
  // });
  return app.use("/", router);
};

export default initWebRoute;
