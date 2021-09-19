import { createContext, useContext, useReducer } from 'react';
import useIsLocalStorage from '../hooks/useIsLocalStorage';
import useGetInitialState from '../hooks/useGetInitialState';

const makeStore = (userReducer, initialState = {}, key) => {
    const storeContext = createContext();
    const setStateContext = createContext();

    const useStore = () => useContext(storeContext);
    const useDispatch = () => useContext(setStateContext);

    // Save the new state to local storage before returning the value and updating in DOM
    const reducer = (state, action) => {
        const newState = userReducer(state, action);
        localStorage.setItem(key, JSON.stringify(newState));
        console.log(newState);
        return newState;
    };

    const StoreProvider = ({ children }) => {
        // eslint-disable-next-line no-param-reassign
        const { isLocal } = useIsLocalStorage();
        const [state, dispatch] = useReducer(reducer, initialState);
        useGetInitialState({ isLocal, dispatch, key, initialState });

        return (
            <storeContext.Provider value={state}>
                <setStateContext.Provider value={dispatch}>{children}</setStateContext.Provider>
            </storeContext.Provider>
        );
    };

    return [StoreProvider, useStore, useDispatch];
};

export default makeStore;
