import ENV from "../../../config/env";
import GoogleAPIs from "../../../config/auth-google";
import { BodyDocument } from "../interfaces/drive.interfaces";

export default class DriveService {
    public static async createTextDocument(BodyDocument: BodyDocument) {
        const { body, mimeType, name } = BodyDocument;
        const token = await GoogleAPIs.getAccessToken(ENV.REFRESH_TOKEN_DRIVE);
        const res = await GoogleAPIs.drive.files.create({
            requestBody: {
              name,
              mimeType
            },
            media: {
              mimeType,
              body
            },
            access_token: token?.token!,
        });
        console.log(res);
    }
}