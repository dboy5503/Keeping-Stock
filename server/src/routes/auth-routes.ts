import { Router, type Request, type Response, RequestHandler } from 'express';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username },
  });
  if (!user) {
    res.status(401).json({ message: 'Authentication failed' });
    return;
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    res.status(401).json({ message: 'Authentication failed' });
    return;
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ username }, secretKey, { expiresIn: '3h' });
  res.json({ token });
  return
};

const router = Router();

// Login a user - /api/auth/login
router.post('/login', login);

export default router;