import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from 'enteties/Profile';
import { fetchProfileDataThunk } from 'enteties/Profile/model/services/fetchProfileData/fetchProfileData';

const initialState : ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileDataThunk.pending, (state, action: PayloadAction<any>) => {
                state.isLoading = true;
            })
            .addCase(fetchProfileDataThunk.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileDataThunk.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = true;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
