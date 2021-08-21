export function getTeamQuery(teamId) {
    return `SELECT * FROM teams WHERE id = '${teamId}'`;
}

export function getTeamsQuery() {
    return `SELECT teams.id,
                    teams.name,
                   first_player.name  as player1,
                   second_player.name as player2
            FROM teams
                     LEFT JOIN players as first_player on teams.player1Id = first_player.id
                     LEFT JOIN players as second_player on teams.player2Id = second_player.id`;
}

export function addTeamQuery(team) {
    return `
    INSERT INTO teams
      (
        name,
        player1Id,
        player2Id
      )
    VALUES
      (
        '${team.name}',
        '${team.player1}',
        '${team.player2}'
      )
  `
}