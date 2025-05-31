import jwt from "jsonwebtoken"
export let authMiddleware = (req, res, next) => {

    let token = req.cookies.jwt



    if (token) {
        let payload = jwt.verify(token, process.env.JWT_SECRET)


        if (payload) {
            // req.role = payload.role
            req.user = payload.user
            req.id = payload.id
            next()
        } else {
            return res.status(401).json({
                success: false,
                message: "unauthorized user !$$"
            })
        }
    } else {
        return res.status(401).json({
            success: false,
            message: "unauthorized user !"
        })
    }
}
export let adminMiddleware = (req, res, next) => {
    let token = req.cookies.jwt
    if (token) {
        let payload = jwt.verify(token, process.env.JWT_SECRET)
        if (payload.role === "admin") {
            next()
        } else {
            return res.status(401).json({
                success: false,
                message: "unauthorized access denied  !"
            })
        }
    } else {
        return res.status(401).json({
            success: false,
            message: "unauthorized  access denied  !"
        })
    }
}