import { createSlice } from "@reduxjs/toolkit";
import { ItemTypes } from "../types/ItemType";

const initialState: ItemTypes[] = [];

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            return action.payload;
        },
        searchProduct: (state, action) => {
            const searchKey = action.payload.toLowerCase();
            // Filter products where name matches searchKey (case-insensitive)
            const result = state.filter(
                (product) => {
                    console.log(product.name.toLowerCase());

                    return product.name.toLowerCase().includes(searchKey);
                }
            );
            console.log(result);

            return result;
        },
    },
});

export const { setProducts, searchProduct } = productSlice.actions;

export default productSlice.reducer;