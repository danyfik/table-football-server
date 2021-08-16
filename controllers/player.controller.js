import DatabaseConnection from "../database.js";
const { db } = DatabaseConnection;
import Utils from "../utils/utils.js";
import { getPlayerQuery, getPlayersQuery } from '../queries/player.queries.js'

export async function getPlayer(req, res, next) {
    console.log('getPlayer');
    const playerId = req.params.playerId;
    if (!Utils.isNumber(playerId)) {
        console.log('Id non valable. Ce n\'est pas un nombre')
        return;
    }
    const result = Utils.castMysqlRecordsToArray(await db.pool.query(getPlayerQuery(playerId)));
    console.log(result);
    res.json(result);
}
export async function getPlayers(req, res, next) {
    const players = Utils.castMysqlRecordsToArray(await db.pool.query(getPlayersQuery()));
    res.json({
        players
    });
}