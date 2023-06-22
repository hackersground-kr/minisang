import express from 'express';
const app = express();

// packages
import bodyParser from 'body-parser';
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hi test~ !!!!');
})

app.post('/', (req, res) => {
  res.status(200).json({ success: true });
})

export default app;