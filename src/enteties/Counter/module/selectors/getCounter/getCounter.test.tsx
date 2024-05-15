import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider';
import { getCounter } from 'enteties/Counter';

describe('getCounter Selector', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
