import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

import constants from "../config/consts.js";

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
    minlength: 8,
    select: false,
  },
  dateOfBirth: {
    type: Date,
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
  displayPicture: {
    type: String,
  },
  isVerifiedAccount: {
    type: Boolean,
    default: false,
  },
  googleId: {
    type: String,
  },
  signInMethod: {
    type: String,
    default: "email",
  },
  createdAt: {
    type: Date,
    default: new Date(Date.now()),
  },
  updatedAt: {
    type: Date,
    default: new Date(Date.now()),
  },
});

// Encrypt the password before saving it to the database
userSchema.pre("save", async function () {
  try {
    // Salt the password
    const salt = await bcrypt.genSalt(parseInt(process.env.PASSWORD_SALT_VALUE));
    // Hash the password and store it in DB
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    console.error("Error in password Hashing", error);
  }
});

// Generate the User token
userSchema.methods.createUserToken = function (deviceId) {
  try {
    // Sign the JWT with secret and User ID
    return JWT.sign({ id: this._id, deviceId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });
  } catch (error) {
    console.error("Error in JWT signing ", error);
  }
};

// Validate the user password from the user for login
userSchema.methods.validateUserPassword = async function (candidatePassword, userPassword) {
  try {
    // Return the value of the Hashed password comparison
    return await bcrypt.compare(candidatePassword, userPassword);
  } catch (error) {
    console.error("Error in comparing password ", error);
    return false;
  }
};

export default mongoose.model("User", userSchema);
