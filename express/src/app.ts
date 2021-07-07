import express from "express";
import path from "path";
import { HttpRedirect } from "./middleware/http-redirect.middleware";

// Controllers (route handlers)
import * as homeController from "./controllers/home";
import * as apiController from "./controllers/api";

// Create Express server
const app = express();

// Express configuration
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(HttpRedirect);
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.get("/favicons", homeController.favicons);


/**
 * API routes.
 */
app.get("/api", apiController.getApi);


export default app;
