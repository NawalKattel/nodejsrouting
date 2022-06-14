import express from 'express';
const app = express();
import { config } from 'dotenv';
import { home as ass } from './service/home.js'
import {system as studentRoute} from './routes/student.routes.js'
config();
const port = process.env.PORT ;


app.get('/', ass);
app.use('/me',studentRoute )





app.listen(port, () => {
    console.log('server is running');
});
