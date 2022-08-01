import {
  Request,
  Response,
} from 'express';

import { settingService } from './settings.service';

export const getAll = async (req: Request, res: Response) => {
  try {
    const data = await settingService._getAll();
    return res.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const data = await settingService._getOne(req.params);
    return res.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const postOne = async (req: Request, res: Response ) => {
  try {
    const data  = await settingService._postOne(req.body)
    return res.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const putOne = async (req: Request, res: Response ) => {
  try {
    const data  = await settingService._putOne(req.params,req.body)
    return res.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteOne = async (req: Request, res: Response ) => {
  try {
    const data  = await settingService._deleteOne(req.params)
    return res.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
