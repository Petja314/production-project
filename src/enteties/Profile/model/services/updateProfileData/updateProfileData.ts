import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { getProfileData, getProfileForm, Profile } from 'enteties/Profile';

interface ProfileDataProps {
}

export const updateProfileDataThunk = createAsyncThunk<Profile, void, ThunkConfig<string> >(
    'profile/updateProfileDataThunk',
    async (_, thunkAPI) => {
        const { dispatch, extra, getState } = thunkAPI;

        const formData = getProfileForm(getState());
        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            return response.data;
        } catch (err) {
            // return thunkAPI.rejectWithValue(err.message);
            return thunkAPI.rejectWithValue('failed to fetch profile data');
        }
    },
);
