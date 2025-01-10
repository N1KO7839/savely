import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
import { authRouter } from './routes/auth.route.js';

dotenv.config();
const port = process.env.PORT || 8080;
const app = express();


app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use('/api/auth', authRouter);

app.listen(port, () => {
  connectDB();
  console.log('Server is running on port 8080');
});