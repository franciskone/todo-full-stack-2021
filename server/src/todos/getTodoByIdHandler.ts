import { dummyTodos } from './dummyData';
import { Todo } from './types';

export const getTodoByIdHandler = (req: any, res: { json: (arg0: Todo) => void; }) => {
	res.json(dummyTodos[0]);
}
