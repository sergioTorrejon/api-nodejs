import { plainToClass } from 'class-transformer';

import { User } from '../entity/user';

export const val = async (req, res, next) => {
  // Get the token from the headers
  let userStructureClass = plainToClass(User , req.params)
  
  console.log(userStructureClass,'iddddd')
  //let vallll =  validate.IsNumber(userStructureClass)
/* 
  console.log(userStructureClass,'iddddd')
    // if does not exists a token
  if (!token) {
    return res
      .status(401)
      .send({ auth: false, message: "No Token aws Provided" });
  }
  // decode the token
  const decoded = jwt.verify(token, ENV_CONFIG.JWT_SECRET);
  // save the token on request object to using on routes
  req.userId = decoded['uid']; */

  // continue with the next function
  next();
}
