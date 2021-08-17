export function getPlayerQuery(playerId) {
    return `SELECT * FROM players WHERE id = '${playerId}'`;
}

export function getPlayersQuery() {
    return `SELECT * FROM players`;
}