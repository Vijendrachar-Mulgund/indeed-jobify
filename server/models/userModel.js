import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

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
    select: false,
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
  devices: {
    type: Array,
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

userSchema.methods.createUserToken = function () {
  try {
    return JWT.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });
  } catch (error) {
    console.error("Error in JWT signing ", error);
  }
};

export default mongoose.model("User", userSchema);
