import express from 'express'
import bodyParser from "body-parser";
import cors from "cors"
import DatabaseConnection from "./database.js";
const { db } = DatabaseConnection;

export class App {
    constructor(port) {
        this.port = port;
        db.create();
        this.app = express();
        this.settings();
        this.bodyParsers();
        this.middlewares();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    middlewares() {
        this.app.use(express.json());
    }
    bodyParsers() {
        this.app.use(cors()); // ici sinon problème
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}