import { ItemTypes } from "./ItemType";

export interface CartItemTypes {
    product: ItemTypes
    id: string,
    quantity: number,
    totalPrice: number
}