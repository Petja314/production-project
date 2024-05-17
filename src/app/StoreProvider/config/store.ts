import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider/config/StateSchema';
import { counterReducer } from 'enteties/Counter/module/slice/counterSlice';
import { userReducer } from 'enteties/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore(initialState? : StateSchema) {
    const rootReducer : ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,

    });
}
