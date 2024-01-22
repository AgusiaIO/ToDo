import React from "react";
import { SunIcon, MoonIcon } from "../assets";

interface ThemeSwitcherProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ isDark, setIsDark }) => (
  <button
    className="px-1 transition-transform duration-300 hover:scale-110"
    onClick={() => setIsDark(!isDark)}
  >
    {isDark ? (
      <MoonIcon className="h-8 w-8" />
    ) : (
      <SunIcon className="h-8 w-8" />
    )}
  </button>
);

export default ThemeSwitcher;
