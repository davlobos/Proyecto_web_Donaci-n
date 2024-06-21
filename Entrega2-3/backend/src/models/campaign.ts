import { Schema, model } from 'mongoose';
import { ObjectId } from "mongodb";


const campaignSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  imgURL: { type: String, required: true },
  goal: { type: Number, required: true },
  progress: { type: Number, required: true }
});

const Campaign = model('Campaign', campaignSchema);

export default Campaign;
