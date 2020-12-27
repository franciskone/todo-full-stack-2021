import { Request, Response } from 'express';
import { dummyTodos } from './dummyData';
import { Todo } from './types';

export const getTodoHandler = (req: Request, res: Response<Todo[] | string>)=> {
	// TODO Franciskone: add 404
	res.json(dummyTodos);
}
