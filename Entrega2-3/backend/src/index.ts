import express from 'express';
import connectDB from './config';
import campaignRoutes from './routes/campaignRoutes';
import userRoutes from './routes/userRoutes';
import cors from 'cors';
import morgan from 'morgan';


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/campaigns', campaignRoutes);
app.use('/api/users', userRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});