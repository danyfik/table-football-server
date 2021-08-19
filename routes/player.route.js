import { Router } from 'express'
import {addPlayer, getPlayer, getPlayers} from '../controllers/player.controller.js'

const router = Router();

router.route('/')
    .get(getPlayers)
    .post(addPlayer)
//     .post(createPlayer);

router.route('/:playerId')
    .get(getPlayer)
//     .delete(deletePlayer)

export default router;
