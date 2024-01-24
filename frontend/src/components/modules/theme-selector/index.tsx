"use client";

import React, { useEffect } from "react";

const themes = [
  { label: "Forest", icon: "", value: "forest" },
  { label: "Pastel", icon: "", value: "pastel" },
  { label: "Retro", icon: "", value: "retro" },
  { label: "Wireframe", icon: "", value: "wireframe" },
];

// Types
type Theme = {
  label: string;
  icon: string;
  value: string;
};

function ThemeSelector() {
  useEffect(() => {
    // Check the selected theme, If exists, apply the theme upon mount
    const preSetTheme = localStorage.getItem("theme");

    const selectedTheme = themes?.find((theme) => theme?.value === preSetTheme);
    if (selectedTheme) applySelectedTheme(selectedTheme);
  }, []);

  const applySelectedTheme = (theme: Theme) => {
    // Modify the root HTML attribute to set the theme
    document.documentElement.setAttribute("data-theme", theme.value);

    // Set the selected theme to local storage
    localStorage.setItem("theme", theme.value);
  };

  return (
    <>
      <details className="dropdown">
        <summary>Theme</summary>
        <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
          {themes?.map((theme) => {
            return (
              <div
                key={theme.value}
                onClick={() => applySelectedTheme(theme)}
                className="btn btn-sm my-1 rounded font-normal hover:cursor-pointer"
              >
                {theme?.label}
              </div>
            );
          })}
        </ul>
      </details>
    </>
  );
}

export default ThemeSelector;
