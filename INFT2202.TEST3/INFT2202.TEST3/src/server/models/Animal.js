import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
  name: String,
  legs: Number,
  heads: Number,
  sound: String
});

export default mongoose.model('Animal', animalSchema);
