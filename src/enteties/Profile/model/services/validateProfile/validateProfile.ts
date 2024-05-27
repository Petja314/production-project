import { Profile } from 'enteties/Profile';
import { ValidateProfileError } from 'enteties/Profile/model/types/Profile';

export const validateProfile = (profile? : Profile) => {
    if(!profile) {
        return [ValidateProfileError.NO_DATA]
    }
    const {
        name, lastname, age, currency, country, city, username, avatar
    } = profile;

    const errors : ValidateProfileError[] = []

    if(!name || !lastname || !age || !username) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }
    if(!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE)
    }

    if(!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY)
    }
    return errors
}
