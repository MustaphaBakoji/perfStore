import bcrypt from "bcryptjs"
import { userModel } from "../models/user.models.js"
import jwt from "jsonwebtoken"
export let signupHandler = async (req, res) => {
    let { email, userName, password } = req.body
    let hashedPassword = await bcrypt.hash(password, 12)

    try {
        let user;
        if (email === "admin@petstore.com") {
            user = await userModel.create({ userName, email, password: hashedPassword, role: "admin" },)

            user = {
                userName,
                email,
                _id: user._id,
                role: "admin"
            }
            let token = jwt.sign({ user: user.userName, id: user._id, role: "admin" }, process.env.JWT_SECRET)
            res.cookie("jwt", token, { maxAge: 1000 * 60 * 60 * 20 })

            return res.status(201).json({
                success: true,
                data: user
            })

        }
        user = await userModel.create({ userName, email, password: hashedPassword },)
        user = {
            userName,
            email,
            _id: user._id
        }
        let token = jwt.sign({ user: user.userName, id: user._id }, process.env.JWT_SECRET)
        res.cookie("jwt", token, { maxAge: 1000 * 60 * 60 * 20 })

        return res.status(201).json({
            success: true,
            data: user
        })
    }
    catch (e) {




        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}
export let signInHandler = async (req, res) => {
    let { email, password } = req.body

    let user = await userModel.findOne({ email })
    if (user) {
        let comparePassword = await bcrypt.compare(password, user.password)
        if (comparePassword) {
            let token = jwt.sign({ user: user.userName, id: user._id }, process.env.JWT_SECRET)


            res.cookie("jwt", token, { maxAge: 1000 * 60 * 60 * 20 })
            return res.status(200).json({
                success: true,
                data: {
                    userName: user.userName,
                    id: user._id,
                    email: user.email,
                    role: user.role
                }
            })

        } else {
            return res.status(401).json({
                success: false,
                message: "password or email incorrect!"
            })

        }

    }
    else {
        return res.status(401).json({
            success: false,
            message: "password or email incorrect!!"
        })

    }
}