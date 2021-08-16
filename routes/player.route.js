import { Router } from 'express'
import { getPlayer, getPlayers } from '../controllers/player.controller.js'

const router = Router();

router.route('/')
    .get(getPlayers)
//     .post(createPlayer);

router.route('/:playerId')
    .get(getPlayer)
//     .delete(deletePlayer)

export default router;
