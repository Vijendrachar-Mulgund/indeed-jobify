import { getBrowser } from "./browser";

type BrowserDetails = {
  browserID: string;
  browserType: string;
};

// Generate an store a unique Browser ID
export const initDeviceFingerprint = () => {
  let eBrowserDetails = localStorage.getItem("uuid");

  let browserDetails: BrowserDetails = {
    browserID: "",
    browserType: "",
  };

  if (eBrowserDetails) {
    browserDetails = { ...JSON.parse(eBrowserDetails) };
  }

  if (!eBrowserDetails) {
    const browserID = crypto.randomUUID();
    const browserType = getBrowser();

    browserDetails.browserID = browserID;
    browserDetails.browserType = browserType;

    localStorage.setItem("uuid", JSON.stringify(browserDetails));
  }

  return browserDetails;
};
