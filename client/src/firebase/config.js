import { getValue } from "firebase/remote-config";
import { fetchAndActivate } from "firebase/remote-config";

import { firebaseRemoteConfig } from ".";

export const fetchAndActivateRemoteConfig = async () => {
  try {
    return await fetchAndActivate(firebaseRemoteConfig);
  } catch (error) {
    throw error;
  }
};

export const getConfigValue = (value) => {
  return getValue(firebaseRemoteConfig, value);
};
