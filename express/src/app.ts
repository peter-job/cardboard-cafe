import express from "express";
import bodyParser from "body-parser";
import path from "path";

// Controllers (route handlers)
import * as homeController from "./controllers/home";
import * as apiController from "./controllers/api";

// Create Express server
const app = express();

// Express configuration
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.get("/favicons", homeController.index);


/**
 * API routes.
 */
app.get("/api", apiController.getApi);


export default app;
