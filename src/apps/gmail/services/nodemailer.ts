import SMTPTransport from "nodemailer/lib/smtp-transport";
import ENV from "../../../config/env";
import GoogleAPIs from "../../../config/auth-google";
import nodemailer from "nodemailer";
import { BodyEmail } from "../interfaces/gmail.interfaces";

export default class Nodemailer {
    public static async generateTransport() {
        const authToken = await GoogleAPIs.getAccessToken(ENV.REFRESH_TOKEN_GMAIL);
        return nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              type: "OAuth2",
              user: ENV.USER_EMAIL,
              accessToken: authToken.token!,
            },
        });
    }
    public static async sendEmail(
        dataEmail: BodyEmail,
        transport: nodemailer.Transporter<SMTPTransport.SentMessageInfo>
    ) {
        const { to, subject, text } = dataEmail;
        await transport!.sendMail({
            to,
            subject,
            text,
        });
    }
}