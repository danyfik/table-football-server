export function getGameQuery(gameId) {
    return `SELECT * FROM games WHERE id = '${gameId}'`;
}

export function getGamesQuery() {
    return `SELECT games.id,
                   first_team.name  as team1,
                   second_team.name as team2,
                   first_team.id  as team1Id,
                   second_team.id as team2Id,
                   games.team1Score,
                   games.team2Score
            FROM games
                     LEFT JOIN teams as first_team on games.team1Id = first_team.id
                     LEFT JOIN teams as second_team on games.team2Id = second_team.id`;
}

export function addGameQuery(game) {
    return `
    INSERT INTO games
      (
        team1Id,
        team2Id,
        team1Score,
        team2Score       
      )
    VALUES
      (
        '${game.team1}',
        '${game.team2}',
        '${game.team1Score}',
        '${game.team2Score}'
      )
  `
}

export function getPlayerGamesQuery(playerId) {
    return `SELECT games.id,
                   first_team.name  as team1,
                   second_team.name as team2,
                   first_team.id  as team1Id,
                   second_team.id as team2Id,
                   games.team1Score,
                   games.team2Score
            FROM games
                     LEFT JOIN teams as first_team on games.team1Id = first_team.id
                     LEFT JOIN teams as second_team on games.team2Id = second_team.id
                     LEFT JOIN players as player1team1 on player1team1.id = first_team.player1Id
                     LEFT JOIN players as player2team1 on player2team1.id = first_team.player2Id
                     LEFT JOIN players as player1team2 on player1team2.id = second_team.player1Id
                     LEFT JOIN players as player2team2 on player2team2.id = second_team.player2Id
            WHERE player1team1.id = '${playerId}' or player2team1.id = '${playerId}' or player1team2.id = '${playerId}' or player2team2.id = '${playerId}'`;
}