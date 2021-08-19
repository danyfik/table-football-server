export function getPlayerQuery(playerId) {
    return `SELECT * FROM players WHERE id = '${playerId}'`;
}

export function getPlayersQuery() {
    return `SELECT * FROM players`;
}

export function addPlayerQuery(truc) {
    console.log('truc', truc)
    console.log('name', truc.n)
    console.log('country', truc.c)
    return `
    INSERT INTO players
      (
        name,
        country
      )
    VALUES
      (
        '${truc.n}',
        '${truc.c}'
      )
  `
}