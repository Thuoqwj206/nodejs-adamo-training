// src/routes/userRoutes.ts

import express from 'express';
import {
    getAllUsersController,
    getUserByIdController,
    createUserController,
} from '../controllers/userController';

const router = express.Router();

router.get('/', getAllUsersController);
router.get('/:id', getUserByIdController);
router.post('/', createUserController);

export default router;
