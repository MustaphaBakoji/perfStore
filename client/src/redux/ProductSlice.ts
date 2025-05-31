import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: string | number;
    imageUrl?: string;
    name: string;
    price: number;
    description?: string;
    altText?: string;
}

const initialState: { product: Product | null } = { product: null };

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<Product>) => {
            state.product = action.payload;
        },
        hideProduct: () => {
            return initialState;
        },
    },
});
const productReducer = productSlice.reducer;
export const { setProduct, hideProduct } = productSlice.actions;
export { productReducer };