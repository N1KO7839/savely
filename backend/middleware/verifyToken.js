import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const verifyToken = async (req, res, next) => {
	const token = req.cookies.token;
	if (!token) return res.status(401).json({ success: false, message: "Unauthorized - no token provided" });
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const user = User.findById(decoded.id);
		
		if (!decoded) return res.status(401).json({ success: false, message: "Unauthorized - invalid token" });


		if (user.loggedIn) {
					return res.status(400).json({ success: false, message: "User already logged in" });
		}
		
		req.userId = decoded.id;
		req.user = user;
		next();
	} catch (error) {
        console.log("Error with verifyToken:", error);

        // if there is error with token - clears token cookie and sets loggedIn to false
        if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
            res.clearCookie("token");

            try {
                const decoded = jwt.decode(token);
                if (decoded && decoded.id) {
                    const user = await User.findById(decoded.id);
                    if (user) {
                        user.loggedIn = false;
                        await user.save();
                    }
                }
            } catch (err) {
                console.error("Error logging out user:", err);
            }

            return res.status(401).json({ success: false, message: "Unauthorized - invalid or expired token" });
        }

        return res.status(500).json({ success: false, message: "Server error" });
    }
};