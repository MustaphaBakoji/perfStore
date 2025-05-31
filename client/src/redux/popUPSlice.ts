import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Login: false,
    SignUp: false,
    Cart: false,
    showProduct: false,
}
const PopUpsSlice = createSlice({
    name: "popUp",
    initialState,
    reducers: {

        ToggleLogin: (state) => {
            state.Login = !state.Login

        },
        ToggleSignUp: (state) => {
            state.SignUp = !state.SignUp

        },
        ToggleCart: (state) => {
            state.Cart = !state.Cart

        },
        ToggleProduct: (state) => {
            state.showProduct = !state.showProduct

        },

    }
})


export const { ToggleSignUp, ToggleCart, ToggleLogin } = PopUpsSlice.actions
export default PopUpsSlice.reducer