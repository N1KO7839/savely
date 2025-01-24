import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAIL_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Savely",
};
