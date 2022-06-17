import { getValue } from "firebase/remote-config";
import { fetchAndActivate } from "firebase/remote-config";

import { firebaseRemoteConfig } from "./";

const fetchAndActivateRemoteConfig = async () => {
  await fetchAndActivate(firebaseRemoteConfig);
};

// Fetch and activate remote config once for the entire application
fetchAndActivateRemoteConfig();

export const getConfigValue = (value) => {
  return getValue(firebaseRemoteConfig, value);
};
