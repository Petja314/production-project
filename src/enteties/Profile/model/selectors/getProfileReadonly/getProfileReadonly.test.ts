import { StateSchema } from 'app/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileReadonly } from 'enteties/Profile';

describe('getProfileReadonly.ts.test', () => {
    test('profile readOnly state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
});
