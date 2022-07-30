import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: new Date(Date.now()),
  },
});

userSchema.pre("save", async function () {
  try {
    const salt = await bcrypt.genSalt(parseInt(process.env.PASSWORD_SALT_VALUE));
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    console.error("Error in password Hashing", error);
  }
});

export default mongoose.model("User", userSchema);
