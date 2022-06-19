const fpPromise = import("https://openfpcdn.io/fingerprintjs/v3").then((FingerprintJS) => FingerprintJS.load());

const initBrowserFingerprint = () => {
  fpPromise
    .then((fingerPrint) => fingerPrint.get())
    .then((browserData) => {
      const browserInfo = {};
      browserInfo.browser = browserData.components.vendorFlavors.value[0];
      browserInfo.browserId = browserData.visitorId;
      console.log("The Browser Data -> ", browserInfo);
    });
};

export { initBrowserFingerprint };
