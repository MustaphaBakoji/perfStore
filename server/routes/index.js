import { Router } from "express";
import { userRouter } from "./user.routes.js";
import { productRouter } from "./products.routes.js";
import { cartRouter } from "./cart.routes.js";
import { adminRouter } from "./admin.routes.js";

export let indexRouter = Router()
indexRouter.use("/users", userRouter)
indexRouter.use('/products', productRouter)
indexRouter.use('/carts', cartRouter)
indexRouter.use('/admin', adminRouter)

// console.log(indexRouter.stack.map(r => r.route?.path));
