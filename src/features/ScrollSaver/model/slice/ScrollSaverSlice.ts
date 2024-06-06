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
            // debugger
            state.scroll[action.payload.path] = action.payload.position
        },
    },
});

export const { actions: scrollActions } = ScrollSaverSlice;
export const { reducer: scrollReducer } = ScrollSaverSlice;
