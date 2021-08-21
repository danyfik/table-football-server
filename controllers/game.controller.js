import DatabaseConnection from "../database.js";
const { db } = DatabaseConnection;
import Utils from "../utils/utils.js";
import { getGameQuery, getGamesQuery, addGameQuery } from '../queries/game.queries.js'

export async function getGame(req, res) {
    const gameId = req.params.gameId;
    if (!Utils.isNumber(gameId)) {
        console.log('Id non valable. Ce n\'est pas un nombre')
        return;
    }
    const result = Utils.castMysqlRecordsToArray(await db.pool.query(getGameQuery(gameId)));
    res.json(result);
}
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