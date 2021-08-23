export function getPlayerQuery(playerId) {
    return `SELECT * FROM players WHERE id = '${playerId}'`;
}

export function getPlayersQuery() {
    return `
        SELECT
            players.id, 
            players.name, 
            players.country, 
            team.id AS teamId, 
            team.name AS teamName
        FROM players
        LEFT JOIN teams AS team ON team.player1Id = players.id OR team.player2Id = players.id;`;
}

export function addPlayerQuery(player) {
    return `
    INSERT INTO players
      (
        name,
        country
      )
    VALUES
      (
        '${player.name}',
        '${player.country}'
      )
  `
}