import { StateSchema } from 'app/StoreProvider';
import { getLoginErrorState } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getLoginUsername.test', () => {
    test('return username', () => {
        const state : DeepPartial<StateSchema> = {
            login: { error: 'error-test' },
        };
        expect(getLoginErrorState(state as StateSchema)).toEqual('error-test');
    });
});
