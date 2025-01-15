import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({id: userId}, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("token", token, {
        httpOnly: true, //XSS
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", //csrf
        maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
    })

    return token;
}