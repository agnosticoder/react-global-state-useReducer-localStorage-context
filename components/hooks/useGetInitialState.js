import { useEffect } from 'react';

const useGetInitialState = ({ isLocal, dispatch, key, initialState }) => {
    useEffect(() => {
        console.log('getInitialState');
        // Try to fetch saved local storage data for the store if exist on provided key
        // we executed this in useEffect block because we don't want it to run on server side and also before first render
        try {
            // eslint-disable-next-line no-param-reassign
            if (isLocal) {
                const getState = JSON.parse(localStorage.getItem(key)) || initialState;
                dispatch({ type: 'initial', payload: getState });
            }
        } catch (e) {
            // not need to catch error
            console.log(e);
        }
    }, [isLocal]);
};

export default useGetInitialState;
