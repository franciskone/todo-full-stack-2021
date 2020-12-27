import { dummyTodos } from './dummyData';
import { Todo } from './types';

export const getTodosHandler = (req: any, res: { json: (arg0: Todo[]) => void; }) => {
	res.json(dummyTodos);
}
