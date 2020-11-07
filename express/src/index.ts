import express from "express";

class App {
    server: express.Application;
    port: number = +process.env.PORT || 8080;

    constructor(server: express.Application) {
        this.server = server;
    }

    Listen() {
        const port = 8080; // default port to listen
        this.server = express();
        this.server.listen( port, () => {
            // tslint:disable-next-line:no-console
            console.log( `server started at http://localhost:${ port }` );
        } );
    }
}

new App(express()).Listen();
