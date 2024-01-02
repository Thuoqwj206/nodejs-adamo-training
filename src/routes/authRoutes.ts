// src/routes/authRoutes.ts

import express from 'express';
import { login } from '../controllers/authController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/login', login);
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route', user: req.body });
});

export default router;
