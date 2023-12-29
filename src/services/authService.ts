// src/services/authService.ts

import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export const generateToken = (user: { username: string }): string => {
  return jwt.sign(user, SECRET_KEY);
};
