import { Router } from 'express'
import { getTeam, getTeams } from '../controllers/team.controller.js'

const router = Router();

router.route('/')
    .get(getTeams)
//     .post(createTeam);

router.route('/:teamId')
    .get(getTeam)
//     .delete(deleteTeam)

export default router;
