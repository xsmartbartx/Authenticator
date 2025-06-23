import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import { connect } from 'http2';

import connectDB from './config/mongodb.js';

const app = express();
const PORT = process.env.PORT || 4000
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}));

app.get('/', (req, res) => res.send('Welcome to the server!');

app.listen(port, ()=> console.log(`Server is running on port ${port}`));
