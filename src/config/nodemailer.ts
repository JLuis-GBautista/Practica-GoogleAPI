import nodemailer from 'nodemailer';
import getTokenGoogle from './auth-google';
import ENV from './env';

const generateTransport = async () => {
    try {
        const authToken = await getTokenGoogle();
        const transportOne = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              type: "OAuth2",
              user: ENV.USER_EMAIL,
              accessToken: authToken?.token!,
            },
        });
        return transportOne;
    } catch (error) {
        console.log(error, 'error al vincular nodemailer');
    }
}

export default generateTransport;
