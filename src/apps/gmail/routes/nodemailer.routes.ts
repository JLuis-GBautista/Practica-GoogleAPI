import { Router } from "express";
import { sendEmail } from "../controllers/nodemailer.controlllers";

const nodemailerRoutes = Router();

nodemailerRoutes.post('/send', sendEmail);

export default nodemailerRoutes;