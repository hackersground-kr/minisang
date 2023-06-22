import express from 'express';
const app = express();

// packages
import bodyParser from 'body-parser';
 

//routes
import authRouter from './src/controllers/authController.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/auth', authRouter)


export default app;