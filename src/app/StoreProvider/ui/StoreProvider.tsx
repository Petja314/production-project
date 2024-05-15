import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/StoreProvider/config/store';
import { StateSchema } from 'app/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children? : any;
    initialState? : DeepPartial<StateSchema>
}

export const StoreProvider = (props : StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
