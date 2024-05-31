import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { getProfileForm, Profile, validateProfile } from 'enteties/Profile';
import { ValidateProfileError } from 'enteties/Profile/model/types/Profile';

export const updateProfileDataThunk = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]> >(
    'profile/updateProfileDataThunk',
    async (_, thunkAPI) => {
        const {
            dispatch, extra, getState, rejectWithValue
        } = thunkAPI;
        const formData = getProfileForm(getState());
        // debugger
        const errors = validateProfile(formData)
        if(errors.length) {
            return rejectWithValue(errors)
        }
        // console.log(formData.id)
        try {
            // debugger
            const response = await extra.api.put<Profile>(`/profile/${formData.id}`,
                formData
            );
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
