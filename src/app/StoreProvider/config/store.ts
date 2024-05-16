import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider/config/StateSchema';
import { counterReducer } from 'enteties/Counter/module/slice/counterSlice';
import { userReducer } from 'enteties/User';

export function createReduxStore(initialState? : StateSchema) {
    const rootReducer : ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,

    });
}
