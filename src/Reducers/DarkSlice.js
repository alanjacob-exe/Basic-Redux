// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'isDarkMode',
    initialState: false,
    reducers: {
        toggleDarkMode: (state) => !state,
        // increment: (state) => state + 1,
        // decrement: (state) => state - 1,
    },
});

export const { toggleDarkMode } = counterSlice.actions;
export default counterSlice.reducer;
