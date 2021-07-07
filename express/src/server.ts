import http from "http";
import https from "https";
import app from "./app";
import { SslConfig } from "./config/ssl.config";
import { EnvironmentConfig } from "./config/environment.config";

const credentials = new SslConfig().Credentials;

/**
 * Start Express server.
 */

if (EnvironmentConfig.SSL_ENABLED) {
    const httpServer = http.createServer(app);
    const httpsServer = https.createServer(credentials, app);
    httpServer.listen(EnvironmentConfig.HTTP_PORT, () => {
        console.log(
            "  App is running at http://0.0.0.0:%d in %s mode",
            EnvironmentConfig.HTTP_PORT,
            app.get("env")
        );
        console.log("  Press CTRL-C to stop\n");
    });
    httpsServer.listen(EnvironmentConfig.HTTPS_PORT, () => {
        console.log(
            "  App is running at https://0.0.0.0:%d in %s mode",
            EnvironmentConfig.HTTPS_PORT,
            app.get("env")
        );
        console.log("  Press CTRL-C to stop\n");
    });
}
else {
    const httpServer = http.createServer(app);
    httpServer.listen(EnvironmentConfig.HTTP_PORT, () => {
        console.log(
            "  App is running at http://0.0.0.0:%d in %s mode",
            EnvironmentConfig.HTTP_PORT,
            app.get("env")
        );
        console.log("  Press CTRL-C to stop\n");
    });
}
