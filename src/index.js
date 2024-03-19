import express from 'express';
import mongoose from 'mongoose';
import todosController from './controllers/todosController.js';
import cors from 'cors';

mongoose.connect('mongodb://localhost/todos').then(() => {
    console.log('Connected to MongoDB');
    }
).catch(err => {
    console.error('Could not connect to MongoDB', err);
    }
);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/todos', todosController.postTodos);
app.get('/todos', todosController.getTodos);
app.delete('/todos/:id', todosController.deleteTodo); 
app.put('/todos/:id', todosController.updateTodo);

app.listen(3003, () => {
    console.log('Server is running on port 3003');
    }
);
