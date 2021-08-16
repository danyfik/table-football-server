import { Router } from 'express';
import { indexWelcome } from '../controllers/index.controller.js';
const router = Router();

// router.route('/').get((req, res) => res.json('API route'));
router.route('/').get(indexWelcome);

export default router;