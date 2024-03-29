import { Router } from "express";
import { sendEmail } from "../controllers/gmail.controllers";

const gmailRoutes = Router();

gmailRoutes.post('/send', sendEmail);

export default gmailRoutes;