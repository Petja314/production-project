import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider';
import { getLoginPasswordState } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';

describe('getLoginUsername.test', () => {
    test('return username', () => {
        const state : DeepPartial<StateSchema> = {
            login: { password: 'password-test' },
        };
        expect(getLoginPasswordState(state as StateSchema)).toEqual('password-test');
    });
});
