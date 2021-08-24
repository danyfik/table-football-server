import DatabaseConnection from "../database.js";
const { db } = DatabaseConnection;
import Utils from "../utils/utils.js";
import {getGamesQuery, addGameQuery, getPlayerGamesQuery} from '../queries/game.queries.js'

export async function getGames(req, res) {
    try {
        const games = Utils.castMysqlRecordsToArray(await db.pool.query(getGamesQuery()));
        res.status(200).json({
            games
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}
export async function addGame(req, res) {
    const newGame = req.body;

    try {
        const game = Utils.castMysqlRecordsToArray(await db.pool.query(addGameQuery(newGame)));
        res.status(200).json({
            game
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}
export async function getPlayerGames(req, res) {
    try {
        const playerId = req.params.playerId;
        const games = Utils.castMysqlRecordsToArray(await db.pool.query(getPlayerGamesQuery(playerId)));
        res.status(200).json({
            games
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}