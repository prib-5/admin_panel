import express from 'express';
const app = express()
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './routes/route.js';

const PORT = 8000

app.use(cors())
dotenv.config();

app.use(bodyParser.json( { extended : true }))
app.use(bodyParser.urlencoded ( { extended : true }))

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


app.use('/', Routes)
app.use('/uploads', express.static('uploads'))

Connection(username, password);

app.listen(PORT, () => console.log('Server Listening On Port Number 8000'));