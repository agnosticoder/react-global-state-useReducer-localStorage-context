import { TodoProvider } from '../store/store';
import Todos from './Todos';

const App = () => {
    const name = 'Satinder';

    return (
        <TodoProvider>
            <h2>Maintaining Global State with useReducer and context! 🤯</h2>
            <h2>Also persisting data locally with localStrage </h2>
            <div>
                <Todos />
            </div>
        </TodoProvider>
    );
};

export default App;
