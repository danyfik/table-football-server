export function getPlayerQuery(playerId) {
    return `SELECT * FROM players WHERE id = '${playerId}'`;
}

export function getPlayersQuery() {
    return `SELECT * FROM players`;
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