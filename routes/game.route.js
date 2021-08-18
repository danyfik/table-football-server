import { Router } from 'express'
import { getGame, getGames } from '../controllers/game.controller.js'

const router = Router();

router.route('/')
    .get(getGames)
//     .post(createGame);

router.route('/:gameId')
    .get(getGame)
//     .delete(deleteGame)

export default router;
