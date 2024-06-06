import React, { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema } from 'app/StoreProvider';
import { StateSchemaKey } from 'app/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]? : Reducer<NonNullable<StateSchema[name]>>
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers : ReducersList
    removeAfterUnmount? : boolean // remove reducer if === true
}

export const DynamicModuleLoader : FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children, reducers, removeAfterUnmount = true,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers()
        Object.entries(reducers).forEach(([name, reducer] : ReducersListEntry) => {
            const mounted = mountedReducers[name as StateSchemaKey]
            // Add new reducer only if it doesn't exist
            if(!mounted) {
                store.reducerManager.add(name, reducer);
                dispatch(({ type: `@INIT ${name} reducer` }));
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name] : ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch(({ type: `@DESTROY ${name} reducer` }));
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
