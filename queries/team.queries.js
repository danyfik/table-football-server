export function getTeamQuery(teamId) {
    return `SELECT * FROM teams WHERE id = '${teamId}'`;
}

export function getTeamsQuery() {
    return `SELECT * FROM teams`;
}