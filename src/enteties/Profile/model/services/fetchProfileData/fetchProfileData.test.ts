import axios from 'axios';
import { Dispatch } from 'redux';
import { StateSchema } from 'app/StoreProvider';
import { fetchProfileDataThunk, Profile } from 'enteties/Profile';
import { Currency } from 'enteties/Currency';
import { Country } from 'enteties/Country';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

const data: Profile = {
    name: 'dima',
    lastname: 'petrov',
    age: 27,
    currency: Currency.GBP,
    country: Country.UnitedKingdom,
    city: 'Soham',
    username: 'petya',
    avatar: 'Avatar'
};

describe('fetchProfileDataThunk test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileDataThunk);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileDataThunk);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
