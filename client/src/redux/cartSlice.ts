import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemTypes } from "../types/CartTypes";
import { ItemTypes } from "../types/ItemType";
const initialState: CartItemTypes[] = [];
const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        setCarts: (state, action) => {

            return action.payload

        },
        addToCart: (state, action: PayloadAction<ItemTypes>) => {
            const item = action.payload;
            const existingItem = state.find((cartItem) => cartItem.product._id === item._id);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += item.price;
            } else {
                state.push({ product: item, quantity: 1, totalPrice: item.price, id: "placeHolder" });
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        },
        subtractFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.find((cartItem) => cartItem.product._id === id);

            if (existingItem) {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= existingItem.product.price;

                if (existingItem.quantity <= 0) {
                    console.log("finished");
                    // Remove the item from the state array  
                    const index = state.findIndex((item) => item.product._id === id);
                    if (index > -1) {
                        state.splice(index, 1);
                    }
                }
            }
        },
        clearCart: () => initialState,
    }



})


export const { setCarts, addToCart, removeFromCart, subtractFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;