import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default () => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Verifica se o caminho da requisição é diferente das rotas de criar conta e login
    if (req.path !== '/login' && req.path !== '/criar-conta') {
      res.header('Content-Type', 'application/json');
      const token = req.headers.authorization?.split(' ')[1];
      const secretKey = process.env.JWT_SECRET ?? '';

      if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
          if (!err) {
            req.headers['Authorization'] = token;
          }
          next();
        });
      } else {
        next();
      }
    } else {
      next();
    }
  };
};
