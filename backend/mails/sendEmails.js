import {mailtrapClient, sender} from "./mailtrap.js";
import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE, FORGOT_PASSWORD_EMAIL_TEMPLATE, RESET_PASSWORD_SUCCESS} from "./emailTemplates.js";
export async function sendVerificationEmail(email, verificationToken){
    const recipient = [{email}];
    let name = email.split("@")[0];
    let currentYear = new Date().getFullYear();
    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        })
        console.log("Email sent successfully");
    }
    catch(error){
        console.error("Error sending verification email:", error.message);
    }
}
export const sendWelcomeEmail = async(email) => {
    const recipient = [{email}];
    let name = email.split("@")[0];
    let currentYear = new Date().getFullYear();
    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Welcome to our platform",
            html: WELCOME_EMAIL_TEMPLATE.replace("{userName}", name).replace("{currentYear}", currentYear),
            category: "Welcome",
        });
        console.log("Welcome email sent successfully");
    }
    catch(error){
        console.error("Error sending welcome email:", error.message);
    }
}

export const sendPasswordResetEmail = async(email, resetLink) => {
    const recipient = [{email}];
    let name = email.split("@")[0];
    let currentYear = new Date().getFullYear();
    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: FORGOT_PASSWORD_EMAIL_TEMPLATE.replace("{userName}", name).replace("{currentYear}", currentYear).replace("{resetLink}", resetLink),
            category: "Reset Password",
        });
        console.log("Reset password email sent successfully");
    }
    catch(error){
        console.error("Error sending reset password email:", error.message);
    }

}

export const sendResetSuccessEmail = async(email) => {
    const recipient = [{email}];
    let name = email.split("@")[0];
    let currentYear = new Date().getFullYear();
    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password reseted successfully",
            html: RESET_PASSWORD_SUCCESS.replace("{userName}", name).replace("{currentYear}", currentYear),
            category: "Reset Password Success",
        });
        console.log("Password reseted successfully");
    }
    catch(error){
        console.error("Error sending success reset password email:", error.message);
    }
}