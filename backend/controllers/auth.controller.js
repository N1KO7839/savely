import { User } from "../models/user.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendPasswordResetEmail } from "../mails/sendEmails.js";
import { sendVerificationEmail, sendWelcomeEmail, sendResetSuccessEmail} from "../mails/sendEmails.js";
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

export const login = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success: false, message: "Invalid credentials"});
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({success: false, message: "Invalid credentials"});   
        }
        if(user.loggedIn){
            return res.status(400).json({success: false, message: "User already logged in"});
        }
        generateTokenAndSetCookie(res, user._id);
        
        user.loggedIn = true;
        await user.save();

        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user:{
                ...user._doc,
                password: undefined,
            },
        })
    }
    catch(error){
        console.error("Login error:", error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

export const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({success: true, message: "Logged out successfully"});
}

export const forgotPassword = async (req, res) => {
    const {email} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success: false, message: "User not found"});
        }

        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiersAt = Date.now() + 10 * 60 * 1000; // 10 minutes

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpire = resetTokenExpiersAt;

        await user.save();

        //sending mail
        await sendPasswordResetEmail(user.email, `https://localhost:8080/reset-password/${resetToken}`);
        res.status(200).json({success: true, message: "Reset password link sent to your email"});
        
    }
    catch(error){
        console.error("Forgot password error:", error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

export const resetPassword = async (req, res) => {
    try{
        const {token} = req.params;
        const {password} = req.body;
        
        const user = await User.findOne({
            resetPasswordToken : token,
            resetPasswordExpire : {$gt: Date.now()},
        })

        if(!user){
            return res.status(400).json({success: false, message: "Your reset token is invalid or expired"})
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        sendResetSuccessEmail(user.email);

        res.status(200).json({success: true, message: "Successfully reseted password"})
    }
    catch(error){
        console.error("Error with reseting password", error.message);
        res.status(400).json({success: false, message: error.message})
    }
}

export const checkAuth = async (req, res) => {
	try {
		const user = await User.findById(req.userId).select("-password");
		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}

		res.status(200).json({ success: true, user });
	} catch (error) {
		console.log("Error in checkAuth ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};