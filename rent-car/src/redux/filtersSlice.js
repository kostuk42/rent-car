// redux/filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
            make: null,
            price: '',
            mileage: { min: '', max: '' }
    },
    reducers: {
        setFilters: (state, action) => {
            return action.payload
        }
    },
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
