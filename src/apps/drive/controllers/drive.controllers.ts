import { Request, Response } from "express";
import DriveService from "../services/drive";
import { BodyDocument } from "../interfaces/drive.interfaces";

export const createTextDocument = async (req: Request, res: Response) => {
    const bodyDocument = req.body as BodyDocument;
    try {
        await DriveService.createTextDocument(bodyDocument);
        return res.status(200).json({ok: true, msg: 'Documento creado con exito'});
    } catch (error) {
        return res.status(500).json(error);
    }
}