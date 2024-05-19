import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider/config/StateSchema';
import { counterReducer } from 'enteties/Counter/module/slice/counterSlice';
import { userReducer } from 'enteties/User';
import { createReducerManager } from 'app/StoreProvider/config/reducerManager';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore(initialState? : StateSchema) {
    const rootReducer : ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,

    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
