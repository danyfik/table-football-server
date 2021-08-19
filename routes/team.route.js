import { Router } from 'express'
import { getTeam, getTeams, addTeam } from '../controllers/team.controller.js'

const router = Router();

router.route('/')
    .get(getTeams)
    .post(addTeam)

router.route('/:teamId')
    .get(getTeam)
//     .delete(deleteTeam)

export default router;
