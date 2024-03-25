import express from 'express';
import ENV from './config/env';
import gmailRoutes from './apps/gmail/routes/gmail.routes';

const app = express();

app.use(express.static('Public'));
app.use(express.json());

app.use('/gmail', gmailRoutes);

app.listen(ENV.PORT, () => {
    console.log(`El servidor esta activo en el puerto ${ENV.PORT}.\nModo ${ENV.TYPE}`);
});