import { Request, Response } from "express";
import generateTransport from "../../../config/nodemailer";
import { BodyMessage } from "../interfaces/gmail.interfaces";

export const sendEmail = async (req: Request, res: Response) => {
    const { to, text, subject } = req.body as BodyMessage;
    try {
        const transport = await generateTransport();
        transport!.sendMail({
            to,
            subject,
            text,
          });
        return res.status(200).json({ok: true, msg: 'Mensaje enviado con exito'});
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}