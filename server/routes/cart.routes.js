import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { add_to_cart, deleteCart, getAllCarts, minus_from_cart, } from "../controllers/carts.controller.js";
let cartRouter = Router()
cartRouter.get('/', authMiddleware, getAllCarts)
cartRouter.post('/add/:productId', authMiddleware, add_to_cart)
cartRouter.delete('/minus/:productId', authMiddleware, minus_from_cart)
cartRouter.delete('/remove/:productId', authMiddleware, deleteCart)
export { cartRouter }