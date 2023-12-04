// redux/paginationSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        currentPage: 1,
    },
    reducers: {
        setCurrentPage: (state, action) => {
            console.log(action)
            state.currentPage = action.payload;
        },
    },
});

export const { setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
