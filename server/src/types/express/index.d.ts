declare namespace Express {
  interface Request {
    user?: {
      email: string; // this is the payload of the JWT token we are sending back to the client
    };
  }
}
