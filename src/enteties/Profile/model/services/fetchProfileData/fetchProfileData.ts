import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { Profile } from 'enteties/Profile';

export const fetchProfileDataThunk = createAsyncThunk<Profile, string, ThunkConfig<string> >(
    'profile/fetchProfileDataThunk',
    async (profileId, thunkAPI) => {
        const { dispatch, extra } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);
            // debugger;
            if(!response.data) {
                throw Error()
            }
            console.log('response.data > ', response.data)
            return response.data;
        } catch (err) {
            // return thunkAPI.rejectWithValue(err.message);
            return thunkAPI.rejectWithValue('failed to fetch profile data');
        }
    },
);
