import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an Email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 8,
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Please enter your Date of Birth"],
  },
  location: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(Date.now()),
  },
});

export default mongoose.model("User", userSchema);
