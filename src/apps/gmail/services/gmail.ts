import GoogleAPIs from "../../../config/auth-google";
import ENV from "../../../config/env";
import { BodyEmail } from "../interfaces/gmail.interfaces";

export default class GmailService {
    public static makeEmail (dataEmail: BodyEmail) {
        const { to, subject, text } = dataEmail;
        const emailLines = [];
        emailLines.push(`From: Mi cuenta`);
        emailLines.push(`To: ${to}`);
        emailLines.push('Content-type: text/html;charset=iso-8859-1');
        emailLines.push('MIME-Version: 1.0');
        emailLines.push(`Subject: ${subject}`);
        emailLines.push('');
        emailLines.push(text);
        return emailLines.join('\r\n');
    }

    public static async sendEmail(raw: string) {
        const token = await GoogleAPIs.getAccessToken(ENV.REFRESH_TOKEN_GMAIL);
        const gmailResponse = await GoogleAPIs.gmail.users.messages.send({
            userId: 'me',
            requestBody: {
              raw: Buffer.from(raw).toString('base64'),
            },
            access_token: token.token!
          });
        
          console.log('Correo enviado:', gmailResponse.data);
    }
}