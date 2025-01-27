import { User } from "../models/user.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../mails/sendEmails.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Check if the user already exists
        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Generate a verification token
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        // Create the new user
        const user = new User({
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() +    24 * 60 * 60 * 1000, // Expires in 24 hours
        });

        // Save the user in the database
        await user.save();
        
        // Send JWT token and set it in a cookie
        generateTokenAndSetCookie(res, user._id);


        await sendVerificationEmail(user.email, user.verificationToken);


        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...user._doc,
                password: undefined,
            },
        });
    } catch (error) {
        console.error("Signup error:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};
export const verifyEmail = async (req, res) => {
    const {code} = req.body;
    try{
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: {$gt: Date.now()}
        });

        if(!user){
            return res.status(400).json({success: false, message: "Invalid or expired verification code"});
        }

        user.verified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save();

        await sendWelcomeEmail(user.email, user.name);

        res.status(201).json({
            success: true,
            message: "User verified successfully",
            user: {
                ...user._doc,
                password: undefined,
            },
        });
    }
    catch(error){
        console.error("Error verifying email:", error.message);
        res.status(500).json({success: false, message: error.message});
    }
}
export const login = (req, res) => {
    res.send("Login route");
}
export const logout = async (req, res) => {
    res.send("Logout route");
}
