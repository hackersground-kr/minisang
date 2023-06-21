import express from 'express';
const app = express();

// packages
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';


app.use(helmet());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hi ~');
})

app.post('/', (req, res) => {
  res.status(200).json({ success: true });
})

export default app;