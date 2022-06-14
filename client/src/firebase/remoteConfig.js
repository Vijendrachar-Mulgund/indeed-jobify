import { getValue } from "firebase/remote-config";
import { fetchAndActivate } from "firebase/remote-config";

import { firebaseRemoteConfig } from "./";

const fetchAndActivateRemoteConfig = async () => {
  const remoteConfig = await fetchAndActivate(firebaseRemoteConfig);

  return getValue(firebaseRemoteConfig);
};

export { fetchAndActivateRemoteConfig };
