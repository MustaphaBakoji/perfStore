import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemTypes } from "../types/ItemType";
const initialState: {
    admin: boolean,
    home: boolean,
    update: boolean,
    addProduct: boolean,

    productToUpdate: ItemTypes | null

} = {
    admin: false,
    home: false,
    update: false,
    addProduct: false,
    productToUpdate: null

}
const adminSlice = createSlice({
    initialState,
    name: "admin",
    reducers: {
        setAdmin: (state) => {
            state.admin = true
            state.home = true

        },
        sethome: (state) => {
            state.home = true
            state.update = false
            state.addProduct = false
            state.productToUpdate = null
        },
        setAddProduct: (state) => {
            state.home = false
            state.update = false
            state.addProduct = true
        },
        setUpdate: (state, action: PayloadAction<ItemTypes>) => {
            state.home = false
            state.update = true
            state.addProduct = false
            state.productToUpdate = action.payload
        }
    }
})

export default adminSlice.reducer
export const { setAdmin, setAddProduct, setUpdate, sethome } = adminSlice.actions