import { Router } from "express";
import { signInHandler, signupHandler } from "../controllers/user.controller.js";
export let userRouter = Router()
userRouter.post('/signUp', signupHandler)
userRouter.post('/login', signInHandler)
userRouter.get('/logout', signInHandler)