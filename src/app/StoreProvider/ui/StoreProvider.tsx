import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/StoreProvider/config/store';
import { StateSchema } from 'app/StoreProvider/config/StateSchema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children? : any;
    initialState? : DeepPartial<StateSchema>
    asyncReducers? : DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props : StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
