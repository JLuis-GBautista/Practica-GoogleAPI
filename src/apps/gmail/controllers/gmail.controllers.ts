import { Request, Response } from "express";
import { BodyEmail } from "../interfaces/gmail.interfaces";
import GmailService from "../services/gmail";

export const sendEmail = async (req: Request, res: Response) => {
    const bodyEmail = req.body as BodyEmail;
    try {
        const raw = GmailService.makeEmail(bodyEmail);
        await GmailService.sendEmail(raw);
        return res.status(200).json({ok: true, msg: 'Mensaje enviado con exito'});
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}