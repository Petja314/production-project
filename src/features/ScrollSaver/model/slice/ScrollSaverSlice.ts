import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ScrollSaverSchema } from 'features/ScrollSaver';

const initialState: ScrollSaverSchema = {
    scroll: {}
};

export const ScrollSaverSlice = createSlice({
    name: 'scrollSaver',
    initialState,
    reducers: {
        // example : main_page , 500 ( page , scroll position in px )
        setScrollPosition: (state, action: PayloadAction<{path : string, position : number}>) => {
            state.scroll[action.payload.path] = action.payload.position
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsernameThunk.pending, (state, action: PayloadAction<any>) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsernameThunk.fulfilled, (state, action: PayloadAction<any>) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsernameThunk.rejected, (state, action: PayloadAction<any>) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },

});

export const { actions: scrollActions } = ScrollSaverSlice;
export const { reducer: scrollReducer } = ScrollSaverSlice;
