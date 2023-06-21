import express from 'express';
const app = express();

// packages
import bodyParser from 'body-parser';
import helmet from 'helmet';


app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hi ~');
})

export default app;