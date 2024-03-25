import { google } from "googleapis";
import ENV from "./env";

const oauth2Client = new google.auth.OAuth2(
    ENV.CLIENT_ID,
    ENV.CLIENT_SECRET,
    ENV.REDIRECT_URL
  );

const getTokenGoogle = async() => {
    try {
        oauth2Client.setCredentials({
            refresh_token: ENV.REFRESH_TOKEN,
        });
        const accessToken = await oauth2Client.getAccessToken();
        return accessToken;
    } catch (error) {
        console.log(error, 'error al generar un access token');
    }
}

export default getTokenGoogle;


