// Interface for Document and Window
declare global {
  interface Document {
    documentMode?: any;
  }

  interface Window {
    ApplePaySetupFeature?: any;
    safari?: any;
    chrome?: any;
  }
}

// Main function to fetch the Browser data
export function getBrowser() {
  if (isFirefox()) {
    return "Firefox";
  } else if (isEdge()) {
    return "Edge";
  } else if (isIE()) {
    return "Internet Explorer";
  } else if (isOpera()) {
    return "Opera";
  } else if (isVivaldi()) {
    return "Vivalid";
  } else if (isChrome()) {
    return "Chrome";
  } else if (isSafari()) {
    return "Safari";
  } else {
    return "Unknown";
  }
}

function agentHas(keyword: string) {
  return navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) > -1;
}

function isIE() {
  if (typeof document !== undefined) return !!document?.documentMode;
}

function isSafari() {
  if (typeof window !== undefined) {
    return (
      (!!window?.ApplePaySetupFeature || !!window?.safari) &&
      agentHas("Safari") &&
      !agentHas("Chrome") &&
      !agentHas("CriOS")
    );
  }
}

function isChrome() {
  if (typeof window !== undefined)
    return agentHas("CriOS") || agentHas("Chrome") || !!window.chrome;
}

function isFirefox() {
  return agentHas("Firefox") || agentHas("FxiOS") || agentHas("Focus");
}

function isEdge() {
  return agentHas("Edg");
}

function isOpera() {
  return agentHas("OPR");
}

function isVivaldi() {
  return agentHas("Vivaldi");
}
