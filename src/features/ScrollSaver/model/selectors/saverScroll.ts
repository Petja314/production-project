import { StateSchema } from 'app/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getSaverScroll = (state : StateSchema) => state.scrollSaver?.scroll
export const getSaverScrollByPath = createSelector(
    getSaverScroll,
    (state : StateSchema, path : string) => path,
    (scroll, path) => scroll[path] || 0
)
