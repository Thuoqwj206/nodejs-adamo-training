// src/controllers/authController.ts

import { Request, Response } from 'express';
import { generateToken } from '../services/authService';

export const login = (req: Request, res: Response) => {
    // Authenticate user (mock data for demonstration purposes)
    const user = { username: 'exampleUser' };
    const token = generateToken(user);
    res.json({ token });
};
