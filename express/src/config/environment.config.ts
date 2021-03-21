import dotenv from "dotenv";
dotenv.config();

export class EnvironmentConfig {
    public constructor() {
    }

    public static HTTP_PORT: string = process.env.HTTP_PORT || "80"; 
    public static HTTPS_PORT: string = process.env.HTTPS_PORT || "443"; 
    public static SSL_CERT_PATH: string = process.env.SSL_CERT_PATH || ".";
}
