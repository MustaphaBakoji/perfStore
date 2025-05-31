import { Router } from "express";
export let adminRouter = Router()


import { addNewProduct, deletePRoduct, updateProduct } from "../controllers/admin.controller.js";
import { adminMiddleware, authMiddleware } from "../middlewares/auth.middleware.js";

adminRouter.post("/", authMiddleware, adminMiddleware, addNewProduct
)
adminRouter.delete("/:id", authMiddleware, adminMiddleware, deletePRoduct)
adminRouter.put("/:id", authMiddleware, adminMiddleware, updateProduct)