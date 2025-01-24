import {mailtrapClient, sender} from "../mails/mailtrap.js";
import { VERIFICATION_EMAIL_TEMPLATE  } from "./emailTemplates.js";
export async function sendVerificationEmail(email, verificationToken){
    const recipient = [{email}];
    
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
    // mailtrapClient.sendMail(email, sender);
 }