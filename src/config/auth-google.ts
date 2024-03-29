import { google } from "googleapis";
import ENV from "./env";

export default class GoogleAPIs {
    private static oauth2Client = new google.auth.OAuth2(
        ENV.CLIENT_ID,
        ENV.CLIENT_SECRET,
        ENV.REDIRECT_URL
    );

    public static drive = google.drive({ version: 'v3', auth: this.oauth2Client });

    public static gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });

    public static async getAccessToken(refresh_token: string) {
        this.oauth2Client.setCredentials({
            refresh_token: refresh_token,
        });
        return await this.oauth2Client.getAccessToken();
    }
}




