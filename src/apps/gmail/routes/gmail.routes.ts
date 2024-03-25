import { Router } from "express";
import { sendEmail } from "../controllers/gmail.controlllers";

const gmailRoutes = Router();

gmailRoutes.post('/send', sendEmail);

export default gmailRoutes;