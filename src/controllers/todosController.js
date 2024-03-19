import todosModel from '../models/todosModel.js';
 
 
 const postTodos = async (req, res) => {
    try {
        const {title, description, status} = req.body;
        const todo = await todosModel.addTodo({title, description, status});
        res.status(201).send(todo);
    }  
    catch (error) {
        res.status(500).send({message: error.message});
    }  
}

const getTodos = async (req, res) => {
    try {
        const todos = await todosModel.getTodos();
        res.status(200).send(todos);
    }  
    catch (error) {
        res.status(500).send({message: error.message});
    }  
}

const deleteTodo = async (req, res) => {
    try {
        // on peux ajouter une logique pour verifier si l'id existe et renvoyer une erreur 404
        const id = req.params.id;
        await todosModel.deleteTodo(id);
        res.status(200).send({message: 'Todo deleted successfully'});
    }  
    catch (error) {
        res.status(500).send({message: error.message});
    }  
}

const updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const {title, description, status} = req.body;
        const todo = await todosModel.updateTodo(id, {title, description, status});
        res.status(200).send(todo);
    }  
    catch (error) {
        res.status(500).send({message: error.message});
    }  
}



export default {
    postTodos,
    getTodos,
    deleteTodo,
    updateTodo
}