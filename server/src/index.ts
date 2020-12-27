import express from 'express';
import { getTodoByIdHandler, getTodosHandler } from './todos';
// Create a new express app instance
const app: express.Application = express();

app.get('/', (req: any, res) => res.send('Hello World!'));
app.get('/health-check', (req: any, res) => res.send('ok'));

app.get('/todos', getTodosHandler);
app.get('/todos/:id', getTodoByIdHandler);

app.listen(3000, () => {
	console.log('App is listening on port 3000!');
});
