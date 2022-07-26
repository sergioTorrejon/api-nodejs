import jwt from 'jsonwebtoken';

import { SERVER_CONFIG } from '../../../config/server/server.config';

export const verifyToken = async (req, res, next) => {
  // Get the token from the headers
  const token = req.headers["authorization"];
    // if does not exists a token
  if (!token) {
    return res
      .status(401)
      .send({ auth: false, message: "No Token aws Provided" });
  }
  // decode the token
  const decoded = jwt.verify(token, SERVER_CONFIG.jwtSecret);
  // save the token on request object to using on routes
  req.userId = decoded['uid'];

  // continue with the next function
  next();
}
