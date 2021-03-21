import http from "http";
import https from "https";
import app from "./app";
import { SslConfig } from "./config/ssl.config";
import { EnvironmentConfig } from "./config/environment.config";

const credentials = new SslConfig().GetCredentials();
console.log(credentials);

// your express configuration here
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

/**
 * Start Express server.
 */

// httpServer.listen(EnvironmentConfig.HTTP_PORT, () => {
//     console.log(
//         "  App is running at http://0.0.0.0:%d in %s mode",
//         EnvironmentConfig.HTTP_PORT,
//         app.get("env")
//     );
//     console.log("  Press CTRL-C to stop\n");
// });

httpsServer.listen(EnvironmentConfig.HTTPS_PORT, () => {
    console.log(
        "  App is running at https://0.0.0.0:%d in %s mode",
        EnvironmentConfig.HTTPS_PORT,
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});
