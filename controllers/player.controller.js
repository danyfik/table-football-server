import DatabaseConnection from "../database.js";
const { db } = DatabaseConnection;
import Utils from "../utils/utils.js";
import {addPlayerQuery, getPlayerQuery, getPlayersQuery} from '../queries/player.queries.js'

export async function getPlayer(req, res) {
    console.log('getPlayer');
    const playerId = req.params.playerId;
    if (!Utils.isNumber(playerId)) {
        console.log('Id non valable. Ce n\'est pas un nombre')
        return;
    }
    const result = Utils.castMysqlRecordsToArray(await db.pool.query(getPlayerQuery(playerId)));
    res.json(result);
}
export async function getPlayers(req, res) {
    console.log('ici')
    try {
        const players = Utils.castMysqlRecordsToArray(await db.pool.query(getPlayersQuery()));
        res.status(200).json({
            players
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}
export async function addPlayer(req, res) {
    console.log('ici2')
    const newPlayer = req.body;
    console.log(newPlayer);

    try {
        const player = Utils.castMysqlRecordsToArray(await db.pool.query(addPlayerQuery(newPlayer)));
        res.status(200).json({
            player
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}