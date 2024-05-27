import { StateSchema } from 'app/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileValidateErrors } from 'enteties/Profile';
import { ValidateProfileError } from 'enteties/Profile/model/types/Profile';

describe('getProfileValidateErrors.ts.test validate errors', () => {
    const validateProfileErrors: ValidateProfileError[] = [
        ValidateProfileError.INCORRECT_USER_DATA,
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_COUNTRY,
        ValidateProfileError.NO_DATA,
        ValidateProfileError.SERVER_ERROR
    ];

    test('validate profile errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: validateProfileErrors
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateProfileErrors);
    });
});
