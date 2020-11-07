"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor(server) {
        this.port = +process.env.PORT || 8080;
        this.server = server;
    }
    Listen() {
        const port = 8080; // default port to listen
        this.server = express_1.default();
        this.server.listen(port, () => {
            // tslint:disable-next-line:no-console
            console.log(`server started at http://localhost:${port}`);
        });
    }
}
new App(express_1.default()).Listen();
//# sourceMappingURL=index.js.map