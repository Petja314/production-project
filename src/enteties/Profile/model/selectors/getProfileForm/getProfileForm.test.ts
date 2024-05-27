import { StateSchema } from 'app/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileForm } from 'enteties/Profile';
import { Currency } from 'enteties/Currency';
import { Country } from 'enteties/Country';

describe('getProfileForm.ts.test', () => {
    test('return profile form state', () => {
        const form = {
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
                form
            },
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
});
