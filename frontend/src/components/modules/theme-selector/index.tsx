"use client";

// Next & React imports
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useThemeDetector } from "@/hooks/theme-detector";

// Icon Imports
import LightThemeIcon from "/public/icons/light_theme_icon.svg";
import DarkThemeIcon from "/public/icons/dark_theme_icon.svg";
import SystemThemeIcon from "/public/icons/system_theme_icon.svg";

// Consts
const light: string = "wireframe";
const dark: string = "halloween";

function ThemeSelector() {
  // Component States
  const [currentTheme, setCurrentTheme] = useState("");
  const [currentThemeIcon, setCurrentThemeIcon] = useState("");

  // Check if the system has dark theme
  const isSysDarkTheme = useThemeDetector();

  // Mounted
  useEffect(() => {
    if (isSysDarkTheme) {
      setCurrentTheme("dark");
      setCurrentThemeIcon(DarkThemeIcon);
      return applySelectedTheme(dark);
    }

    if (!isSysDarkTheme) {
      setCurrentTheme("light");
      setCurrentThemeIcon(LightThemeIcon);
      return applySelectedTheme(light);
    }
  }, [isSysDarkTheme]);

  const applySelectedTheme = (theme: string) => {
    // Modify the root HTML attribute to set the theme
    document.documentElement.setAttribute("data-theme", theme);

    // Set the selected theme to local storage
    localStorage.setItem("theme", theme);

    return;
  };

  const handleThemeCycle = () => {
    console.log("Theme");
    if (currentTheme === "dark") {
      setCurrentTheme("light");
      applySelectedTheme(light);
      setCurrentThemeIcon(LightThemeIcon);
    } else if (currentTheme === "light") {
      setCurrentTheme("dark");
      applySelectedTheme(dark);
      setCurrentThemeIcon(DarkThemeIcon);
    }
  };

  return (
    <>
      <summary onClick={handleThemeCycle}>
        {currentThemeIcon ? (
          <Image
            src={currentThemeIcon}
            alt="light theme icon"
            height={18}
            width={18}
          ></Image>
        ) : (
          ""
        )}
      </summary>
    </>
  );
}

export default ThemeSelector;
