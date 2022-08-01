import { validationResult } from 'express-validator';

import { stringff } from '../../../../../../server/pipes/string.pipe';
import { valresult } from '../../../../../../tools/helpers/validateHelper';
import { settingsModel } from '../model/setting.model';

export const valid = async (req, res, next) => {
    //stringff(settingsModel.lastname)
    try {
        const vv = stringff(settingsModel.firstname)
        console.log('valllllll',validationResult(vv))
        validationResult(vv).throw()
        return next()
    } catch (err) {
        res.status(403)
        res.send({ errors: err })
    }
    const validCreate =[ 
        stringff(settingsModel.firstname),
        stringff(settingsModel.lastname),
        (req, res, next) => {
           valresult.validateResult(req, res, next)
        }
    ]

    console.log(validCreate)
    validCreate
  // Get the token from the headers
  
  //console.log(userStructureClass,'iddddd')
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
  //next();
}
