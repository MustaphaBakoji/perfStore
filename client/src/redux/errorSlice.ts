import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { errorType } from "../types/errorType";
const initialState: {
    error: errorType | null,
    showError: boolean
} = {
    error: null,
    showError: false
}
const errorSlice = createSlice({
    initialState,
    name: "error",
    reducers: {
        setErrors: (state, action: PayloadAction<errorType>) => {
            state.error = action.payload
            state.showError = true

        },
        hideError: (state) => {
            state.showError = false
        }
    }
})

export default errorSlice.reducer
export const { setErrors, hideError } = errorSlice.actions