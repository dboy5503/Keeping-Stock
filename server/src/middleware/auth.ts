import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define a custom request type to include the user property
interface CustomRequest extends Request {
  user?: JwtPayload;
}

interface JwtPayload {
  email: string;
}

export const authenticateToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  // Authorization header should look like: Authorization: Bearer <token>
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }

  const token = authHeader.split(' ')[1]; // Extract the token

  if (!token) {
    return res.status(401).json({ message: 'Token is missing from authorization header' });
  }

  const secretKey = process.env.JWT_SECRET_KEY;
  
  // Ensure the secret key is available
  if (!secretKey) {
    return res.status(500).json({ message: 'JWT secret key is not configured' });
  }

  // Verify the JWT
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    if (!decoded) {
      return res.status(403).json({ message: 'Token could not be decoded' });
    }

    // Attach the decoded token to the request object
    req.user = decoded as JwtPayload;

    // Proceed to the next middleware or route handler
    return next();
  });
  return next();
};
