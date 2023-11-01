import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log('Error connecting to MongoDB: ', err);
});


app.listen(3000, () => {
  console.log('Server listening on port 3000!');
})

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
