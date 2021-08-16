import express from 'express'
import bodyParser from "body-parser";
import cors from "cors"
import DatabaseConnection from "./database.js";
const { db } = DatabaseConnection;

// Routes
import IndexRoutes from './routes/index.route.js'
import PlayerRoutes from './routes/player.route.js'

export class App {
    constructor(port) {
        this.port = port;
        db.create();
        this.app = express();
        this.settings();
        this.bodyParsers();
        this.routes();
        this.middlewares();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 5000);
    }

    middlewares() {
        this.app.use(express.json());
    }

    bodyParsers() {
        this.app.use(cors()); // ici sinon problème
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/players', PlayerRoutes);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}