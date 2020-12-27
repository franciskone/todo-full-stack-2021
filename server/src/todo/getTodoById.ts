import { Request, Response } from 'express';
import { dummyTodos } from './dummyData';
import { Todo } from './types';

export const getTodoById = (
	req: Request,
	res: Response<Todo | string>
) => {
	const todo = dummyTodos.find(
		({ id }) => id === req.params.id
	);

	if(!todo) {
		res.status(404).send('Not found');
	}

	res.json(todo);
}
