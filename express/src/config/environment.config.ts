import path from "path";

export class EnvironmentConfig {
    public constructor() {
    }

    public static HTTP_PORT: string = process.env.HTTP_PORT || "80"; 
    public static HTTPS_PORT: string = process.env.HTTPS_PORT || "443"; 
    public static SSL_CERT_PATH: string = process.env.SSL_CERT_PATH || ".";
    public static SSL_ENABLED: string = process.env.SSL_ENABLED || "";
    public static FAVICONS_PATH: string = process.env.FAVICONS_PATH || path.join(__dirname, "../gallery/favicons/content");
}
