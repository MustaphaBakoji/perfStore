import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoggedIn: false,
    isLoading: false,

}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },

        logOut: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            state.isLoading = false;

        },
    },
});
export const { setUser, setLoading, logOut, } = userSlice.actions;
export default userSlice.reducer;