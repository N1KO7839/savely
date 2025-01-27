import {mailtrapClient, sender} from "./mailtrap.js";
import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE} from "./emailTemplates.js";
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