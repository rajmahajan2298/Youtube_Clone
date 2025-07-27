import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        themeMode: false
    },
    reducers: {
        toggleTheme: (state) => {
            state.themeMode = !state.themeMode;
        },
        setDarkMode: (state, action) => {
            state.themeMode = action.payload;
        } 
    }
})

export const { toggleTheme, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;