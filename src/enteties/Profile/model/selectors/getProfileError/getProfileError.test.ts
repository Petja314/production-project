import { StateSchema } from 'app/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileError } from 'enteties/Profile';

describe('getProfileError.ts.test', () => {
    test('profile error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'ERROR'
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('ERROR');
    });
});
