import { Request, Response } from 'express';
import { dummyTodos } from './dummyData';

export const putTodoById = (req: Request, res: Response) => {
  // TODO Franciskone: add real implementation
  const todo = dummyTodos.find(
    ({ id }) => id === req.params.id
  );
  res.json(todo);
}
