// redux/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addToFavorites: (state, action) => {
            state.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            return state.filter(advert => advert.id !== action.payload.id);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
