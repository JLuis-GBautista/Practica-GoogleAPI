import express from 'express';
import ENV from './config/env';
import nodemailerRoutes from './apps/gmail/routes/nodemailer.routes';
import gmailRoutes from './apps/gmail/routes/gmail.routes';
import driveRoutes from './apps/drive/routes/drive.routes';

const app = express();

app.use(express.static('Public'));
app.use(express.json());

app.use('/gmail-nodemailer', nodemailerRoutes);
app.use('/gmail', gmailRoutes);

app.use('/drive', driveRoutes);

app.listen(ENV.PORT, () => {
    console.log(`El servidor esta activo en el puerto ${ENV.PORT}.\nModo ${ENV.TYPE}`);
});