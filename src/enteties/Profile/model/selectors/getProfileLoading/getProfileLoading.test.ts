import { StateSchema } from 'app/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileLoading } from 'enteties/Profile';

describe('getProfileLoading.ts.test', () => {
    test('profile loading state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            },
        };
        expect(getProfileLoading(state as StateSchema)).toEqual(true);
    });
});
