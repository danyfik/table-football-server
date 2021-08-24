import { Router } from 'express'
import { getGames, addGame, getPlayerGames } from '../controllers/game.controller.js'

const router = Router();

router.route('/')
    .get(getGames)
    .post(addGame)
//     .post(createGame);

router.route('/:playerId')
    .get(getPlayerGames)

export default router;
