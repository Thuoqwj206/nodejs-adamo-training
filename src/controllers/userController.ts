// src/controllers/userController.ts

import { Request, Response } from 'express';
import { getAllUsers, getUserById, createUser } from '../services/userService';

export const getAllUsersController = (req: Request, res: Response) => {
    const users = getAllUsers();
    res.json({ users });
};

export const getUserByIdController = (req: Request, res: Response) => {
    const userId = parseInt(req.params.id, 10);
    const user = getUserById(userId);
    !user ? res.status(404).json({ error: 'User not found' }) : res.json({ user })
};

export const createUserController = (req: Request, res: Response) => {
    const newUser = req.body;
    const createdUser = createUser(newUser);
    res.status(201).json({ user: createdUser });
};
