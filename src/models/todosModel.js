import Todo from '../schemas/todos.js';

const addTodo= ({title, description, status}) => {
    const todo = new Todo({
        title,
        description,
        status,
    });
    return todo.save();
}

const getTodos = () => {
    return Todo.find();
}

const deleteTodo = (id) => {
    return Todo.findByIdAndDelete(id);
}

const updateTodo = (id, {title, description, status}) => {
    return Todo.findByIdAndUpdate(id, {title, description, status}, {new: true});
}


export default {
    addTodo,
    getTodos,
    deleteTodo,
    updateTodo
}