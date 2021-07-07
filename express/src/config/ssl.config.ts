import fs from "fs";
import https from "https";
import { EnvironmentConfig } from "./environment.config";

export class SslConfig {
    public constructor() {
        this.setCertificate();
    }

    private _privateKey: string;
    private _certificate: string;
    private _ca: string;
    
    private setCertificate() {
        this._privateKey = fs.readFileSync(EnvironmentConfig.SSL_CERT_PATH + 'privkey.pem', 'utf8');
        this._certificate = fs.readFileSync(EnvironmentConfig.SSL_CERT_PATH + 'cert.pem', 'utf8');
        this._ca = fs.readFileSync(EnvironmentConfig.SSL_CERT_PATH + 'chain.pem', 'utf8');
    }

    public get Credentials(): https.ServerOptions {
        return {
            key: this._privateKey,
            cert: this._certificate,
            ca: this._ca
        };
    }
}
