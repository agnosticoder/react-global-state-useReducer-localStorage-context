import { useDispatchTodo } from '../store/store';
import TodoItem from './TodoItem';

const Todos = () => {
    const dispatchTodo = useDispatchTodo();

    const createTodo = () => {
        dispatchTodo({
            type: 'CREATE_TODO',
            payload: {
                name: 'Newly Created Todo',
                id: 'id Three',
            },
        });
    };

    const updateTodo = () => {
        dispatchTodo({
            type: 'UPDATE_TODO',
            payload: {
                name: 'Updated Name',
            },
        });
    };

    const deleteTodo = () => {
        dispatchTodo({ type: 'DELETE_TODO', id: 'id One' });
    };

    return (
        <div>
            <h3>Todos</h3>
            <button onClick={createTodo} type="button">
                Create Todo
            </button>
            <button onClick={updateTodo} type="button">
                Update Todo
            </button>
            <button onClick={deleteTodo} type="button">
                Delete Todo
            </button>
            <TodoItem />
        </div>
    );
};

export default Todos;
