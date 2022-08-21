const initBrowserFingerprint = async () => {
  const existingBrowserInfo = localStorage.getItem("deviceInfo");

  if (!existingBrowserInfo) {
    try {
      const fpcdn = await import("https://openfpcdn.io/fingerprintjs/v3");

      const fpPromise = await fpcdn;
      const fpModule = await fpPromise.load();
      const fpjs = await fpModule.get();

      const browserInfo = {
        type: fpjs.components.vendorFlavors.value[0],
        deviceId: fpjs.visitorId,
      };

      localStorage.setItem("deviceInfo", JSON.stringify(browserInfo));
    } catch (error) {
      throw error;
    }
  }
};

export { initBrowserFingerprint };
