import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { Profile } from 'enteties/Profile';

interface ProfileDataProps {
}

export const fetchProfileDataThunk = createAsyncThunk<Profile, void, ThunkConfig<string> >(
    'profile/fetchProfileDataThunk',
    async (_, thunkAPI) => {
        const { dispatch, extra } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>('/profile');
            // debugger;
            return response.data;
        } catch (err) {
            // return thunkAPI.rejectWithValue(err.message);
            return thunkAPI.rejectWithValue('failed to fetch profile data');
        }
    },
);
