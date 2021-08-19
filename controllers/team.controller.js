import DatabaseConnection from "../database.js";
const { db } = DatabaseConnection;
import Utils from "../utils/utils.js";
import { getTeamQuery, getTeamsQuery, addTeamQuery } from '../queries/team.queries.js'

export async function getTeam(req, res) {
    console.log('getTeam');
    const teamId = req.params.teamId;
    if (!Utils.isNumber(teamId)) {
        console.log('Id non valable. Ce n\'est pas un nombre')
        return;
    }
    const result = Utils.castMysqlRecordsToArray(await db.pool.query(getTeamQuery(teamId)));
    res.json(result);
}
export async function getTeams(req, res) {
    try {
        const teams = Utils.castMysqlRecordsToArray(await db.pool.query(getTeamsQuery()));
        res.status(200).json({
            teams
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}
export async function addTeam(req, res) {
    const newTeam = req.body;
    console.log(newTeam);

    try {
        const player = Utils.castMysqlRecordsToArray(await db.pool.query(addTeamQuery(newTeam)));
        res.status(200).json({
            newTeam
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}