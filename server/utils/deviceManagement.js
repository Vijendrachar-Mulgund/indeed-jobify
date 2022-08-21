import userModel from "../models/userModel.js";
import constants from "./../config/consts.js";

export const validateDevice = async (userDevice, user) => {
  try {
    // Check if device already exists
    const existingDevice = user.devices.find((device) => {
      return device.deviceId === userDevice.deviceId;
    });

    if (existingDevice) {
      return true;
    }

    // If not check if the limit has been reached and write the new device to the DB
    if (user.devices.length >= constants.deviceLimit) {
      return "Device Limit reached";
    }

    // Create an array with existing and the new device and update the existing object
    const response = await userModel.findByIdAndUpdate(user._id, { devices: [...user.devices, userDevice] });

    return true;
  } catch (error) {
    console.error("Error in validating Device ", error);
  }
};
