import { Router } from 'express'
import { getGame, getGames, addGame } from '../controllers/game.controller.js'

const router = Router();

router.route('/')
    .get(getGames)
    .post(addGame)
//     .post(createGame);

router.route('/:gameId')
    .get(getGame)
//     .delete(deleteGame)

export default router;
