import { Request, Response, NextFunction } from 'express';

export default () => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.header('Content-Type', 'application/json');
    next();
  };
};
