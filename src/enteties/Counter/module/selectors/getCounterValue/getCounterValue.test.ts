import { StateSchema } from 'app/StoreProvider';
import { getCounterValue } from 'enteties/Counter/module/selectors/getCounterValue/getCounterValue';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getCounterValue.test', () => {
    test('first test', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
