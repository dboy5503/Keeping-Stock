
import { Router, RequestHandler } from 'express';
import { User } from '../models/user';


import { User } from '../models/index.js';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Router, type Request, type Response, RequestHandler } from 'express';

export const login: RequestHandler = async (req:Request, res:Response) => {
  const { email, password } = req.body; 

  let user;
  try {
    user = await User.findOne({
      where: { email }, // this means we are looking for a user with the email
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
      return;
  }
  if (!user) {
    res.status(401).json({ message: 'Authentication failed' });
    return;
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    res.status(401).json({ message: 'Authentication failed, email or password are incorrect' });
  return;

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ email }, secretKey, { expiresIn: '3h' }); // this is the payload of the JWT token we are sending back to the client
  res.json({ token });
  return;
  }
};

const router = Router();

// Login a user - /api/auth/login
router.post('/login', login);

export default router;
