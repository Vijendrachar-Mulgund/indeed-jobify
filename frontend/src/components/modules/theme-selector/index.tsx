"use client";

// Next & React imports
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useThemeDetector } from "@/react-hooks/theme-detector";

// Icon Imports
import LightThemeIcon from "/public/icons/light_theme_icon.svg";
import DarkThemeIcon from "/public/icons/dark_theme_icon.svg";
import SystemThemeIcon from "/public/icons/system_theme_icon.svg";

// Consts
const light: string = "wireframe";
const dark: string = "halloween";

function ThemeSelector() {
  // Component States
  const [currentTheme, setCurrentTheme] = useState("sys");
  const [currentThemeIcon, setCurrentThemeIcon] = useState("");

  // Check if the system has dark theme
  const isSysDarkTheme = useThemeDetector();

  // Mounted
  useEffect(() => {
    // Check the selected theme, If exists, apply the theme upon mount
    setCurrentThemeIcon(SystemThemeIcon);
    setCurrentTheme("sys");

    if (isSysDarkTheme) return applySelectedTheme(dark);

    if (!isSysDarkTheme) return applySelectedTheme(light);
  }, []);

  const applySelectedTheme = (theme: string) => {
    // Modify the root HTML attribute to set the theme
    document.documentElement.setAttribute("data-theme", theme);

    // Set the selected theme to local storage
    localStorage.setItem("theme", theme);

    return;
  };

  const handleThemeCycle = () => {
    if (currentTheme === "dark") {
      setCurrentTheme("light");
      applySelectedTheme(light);
      setCurrentThemeIcon(LightThemeIcon);
    }
    if (currentTheme === "light") {
      setCurrentTheme("sys");
      isSysDarkTheme ? applySelectedTheme(dark) : applySelectedTheme(light);
      setCurrentThemeIcon(SystemThemeIcon);
    }

    if (currentTheme === "sys") {
      setCurrentTheme("dark");
      applySelectedTheme(dark);
      setCurrentThemeIcon(DarkThemeIcon);
    }
  };

  return (
    <>
      <summary onClick={handleThemeCycle}>
        <Image
          src={currentThemeIcon}
          alt="light theme icon"
          height={18}
          width={18}
        ></Image>
      </summary>
    </>
  );
}

export default ThemeSelector;
