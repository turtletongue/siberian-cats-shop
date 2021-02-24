import mongoose from 'mongoose';

let cachedDb;

export const connectToMongoDB = async () => {
  if (cachedDb) return cachedDb;
  const db = await mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
  cachedDb = db;
  return cachedDb;
}