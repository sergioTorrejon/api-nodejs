import {
  Request,
  Response,
} from 'express';

import {
  _getAll,
  _getOne,
} from './config.service';

export const getConfigs = async (req: Request, res: Response) => {
  try {
    const data = await _getAll();
    return res.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};