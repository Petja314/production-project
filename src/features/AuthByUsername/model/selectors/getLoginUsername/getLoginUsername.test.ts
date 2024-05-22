import { StateSchema } from 'app/StoreProvider';
import { getLoginUsernameState } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getLoginUsername.test', () => {
    test('return username', () => {
        const state : DeepPartial<StateSchema> = {
            login: { username: 'user' },
        };
        expect(getLoginUsernameState(state as StateSchema)).toEqual('user');
    });
});
