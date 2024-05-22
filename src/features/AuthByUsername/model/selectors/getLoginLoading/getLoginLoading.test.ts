import { StateSchema } from 'app/StoreProvider';
import { getLoginLoadingState } from 'features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getLoginUsername.test', () => {
    test('return username', () => {
        const state : DeepPartial<StateSchema> = {
            login: { isLoading: false },
        };
        expect(getLoginLoadingState(state as StateSchema)).toEqual(false);
    });
});
