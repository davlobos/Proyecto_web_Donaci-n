import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const mongoURI = process.env.MONGO_URI as string;

const connectDB = async () => {
  try {
    console.log(mongoURI);
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (error) {

    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;