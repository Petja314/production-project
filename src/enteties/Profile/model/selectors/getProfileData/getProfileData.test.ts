import { StateSchema } from 'app/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileData } from 'enteties/Profile';
import { Currency } from 'enteties/Currency';
import { Country } from 'enteties/Country';

describe('getProfileData.ts.test', () => {
    test('return profile data state', () => {
        const data = {
            name: 'dima',
            lastname: 'petrov',
            age: 27,
            currency: Currency.GBP,
            country: Country.UnitedKingdom,
            city: 'Soham',
            username: 'petya',
            avatar: 'Avatar'
        }
        const state : DeepPartial<StateSchema> = {
            profile: {
                data
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
});
