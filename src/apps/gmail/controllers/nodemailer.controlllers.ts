import { Request, Response } from "express";
import { BodyEmail } from "../interfaces/gmail.interfaces";
import Nodemailer from "../services/nodemailer";

export const sendEmail = async (req: Request, res: Response) => {
    const bodyEmail = req.body as BodyEmail;
    try {
        const transport = await Nodemailer.generateTransport();
        await Nodemailer.sendEmail(bodyEmail, transport);
        return res.status(200).json({ok: true, msg: 'Mensaje enviado con exito'});
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}