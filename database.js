import { createPool } from 'mysql';
import config from "./config/config.js";

class DatabaseConnection {
    async create() {
        const pool = await createPool({
            host: config.database.host,
            user: config.database.user,
            database: config.database.database,
            password: config.database.password,
            connectionLimit: 20
        });
        this._pool = await pool;
    }
    get pool() {
        return this._pool;
    }
}

export default {
    db: new DatabaseConnection()
};