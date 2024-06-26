import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/StoreProvider/config/store';
import { StateSchema } from 'app/StoreProvider/config/StateSchema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children? : any;
    initialState? : DeepPartial<StateSchema>
    asyncReducers? : DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props : StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;
    // const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        // navigate,
    );
    // console.log('RENDER')
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
