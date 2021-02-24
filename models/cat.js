import mongoose from 'mongoose';

const catSchema = mongoose.Schema({
  name: String,
  color: String,
  sex: String,
  birthday: Date,
  imageUrl: String,
  images: [String]
});

export default mongoose.models.Cat || mongoose.model("Cat", catSchema);