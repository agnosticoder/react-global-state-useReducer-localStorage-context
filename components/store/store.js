import makeStore from './makeStore';

/* ------------------------------- Todo Store ------------------------------- */
const TodoInitState = [
    {
        name: 'Todo One',
        id: 'id One',
    },
    {
        name: 'Todo Two',
        id: 'id Two',
    },
];

const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            return [...state, { ...action.payload }];

        case 'UPDATE_TODO': {
            const update = state.map((todo) => {
                if (todo.id === 'id Two') {
                    return { ...todo, ...action.payload };
                }
                return todo;
            });
            return update;
        }

        case 'DELETE_TODO': {
            return state.filter((todo) => todo.id !== 'id One');
        }

        case 'initial':
            return action.payload;

        default:
            return state;
    }
};

const [TodoProvider, useTodo, useDispatchTodo] = makeStore(TodoReducer, TodoInitState, 'todos');

export { TodoProvider, useTodo, useDispatchTodo };

/* ------------------------------- Theme Store ------------------------------ */
// eslint-disable-next-line consistent-return
const ThemeReducer = (state, action) => {
    if (action.type === 'toggle') return { dark: !state.dark };
    if (action.type === 'initial') return action.payload;
    return state;
};

const ThemeInitState = { dark: true };

const [ThemeProvider, useTheme, useDispatchTheme] = makeStore(ThemeReducer, ThemeInitState, 'theme');

export { ThemeProvider, useTheme, useDispatchTheme };
