import express from 'express';
import {
	getTodoById,
	getTodoList,
	postTodo,
	putTodoById
} from './todo';

// Create a new express app instance
const app: express.Application = express();

app.get('/', (req: any, res) => res.send('Hello Worldoooooo!'));
app.get('/health-check', (req: any, res) => res.send('ok'));

app.get('/todo', getTodoList);
app.get('/todo/:id', getTodoById);
app.post('/todo', postTodo);
app.put('/todo/:id', putTodoById);

app.listen(3000, () => {
	console.log('App is listening on port 3000!');
});
