import { configureStore, Reducer, ReducersMapObject, } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider/config/StateSchema';
import { counterReducer } from 'enteties/Counter/module/slice/counterSlice';
import { userReducer } from 'enteties/User';
import { createReducerManager } from 'app/StoreProvider/config/reducerManager';
import { $api } from 'shared/api/api';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';
import { CombinedState } from 'redux';
import { scrollReducer } from 'features/ScrollSaver';

export function createReduxStore(
    initialState? : StateSchema,
    asyncReducers? : ReducersMapObject<StateSchema>,
    // navigate? : (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer : ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSaver: scrollReducer
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    // navigate,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
