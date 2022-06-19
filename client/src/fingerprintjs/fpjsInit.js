const initBrowserFingerprint = async () => {
  const existingBrowserInfo = localStorage.getItem("browserInfo");

  if (!existingBrowserInfo) {
    const fpcdn = await import("https://openfpcdn.io/fingerprintjs/v3");

    const fpPromise = await fpcdn;
    const fpModule = await fpPromise.load();
    const fpjs = await fpModule.get();

    const browserInfo = {
      browser: fpjs.components.vendorFlavors.value[0],
      browserId: fpjs.visitorId,
    };

    localStorage.setItem("browserInfo", JSON.stringify(browserInfo));
  }
};

export { initBrowserFingerprint };
