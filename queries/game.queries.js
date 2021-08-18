export function getGameQuery(gameId) {
    return `SELECT * FROM games WHERE id = '${gameId}'`;
}

export function getGamesQuery() {
    return `SELECT games.id,
                   first_team.name  as team1,
                   second_team.name as team2,
                   games.team1Score,
                   games.team2Score
            FROM games
                     LEFT JOIN teams as first_team on games.team1Id = first_team.id
                     LEFT JOIN teams as second_team on games.team2Id = second_team.id`;
}