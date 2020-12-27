import { Request, Response } from 'express';
import { dummyTodos } from './dummyData';

export const postTodoHandler = (req: Request, res: Response) => {
  // TODO Franciskone: add real implementation
  res.json(dummyTodos[0]);
}
