import { Router } from "express";
import { createTextDocument } from "../controllers/drive.controllers";

const driveRoutes = Router();

driveRoutes.post('/create-text-document', createTextDocument);

export default driveRoutes;