import { useTodo, useTheme } from '../store/store';

const TodoItem = () => {
    const todos = useTodo();
    const theme = useTheme();
    console.log({ todos });
    console.log({ theme });

    return (
        <div>
            <h3>TodosItem</h3>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <ul>{todo.name}</ul>
                </div>
            ))}
        </div>
    );
};

export default TodoItem;
