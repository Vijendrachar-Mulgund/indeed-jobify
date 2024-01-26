"use client";

import { useState, useEffect } from "react";

export const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const mqListener = (e: any) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const getCurrentTheme = () =>
      window?.matchMedia("(prefers-color-scheme: dark)")?.matches;

    setIsDarkTheme(getCurrentTheme());

    const darkThemeMq = window?.matchMedia("(prefers-color-scheme: dark)");

    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);

  return isDarkTheme;
};
