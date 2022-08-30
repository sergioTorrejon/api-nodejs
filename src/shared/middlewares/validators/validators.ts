import { ValidationChain } from 'express-validator';

import { valresult } from '../../res/validate.res';

export const validateCreate =  (model: ValidationChain[]) => [ 
    ...model,
    (req, res, next) => {
      valresult.validateResult(req, res, next)
    }
]