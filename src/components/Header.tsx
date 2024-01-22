import ThemeSwitcher from "./ThemeSwitcher";
import React from "react";

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, setIsDark }) => {
  return (
    <header className="flex text-grayWhite dark:text-lightDarker">
      <div className="container">
        <nav className="flex items-center justify-between rounded-b-xl bg-darkLighter p-6 text-4xl dark:bg-lightLighter">
          <h1>Aga ToDo</h1>
          <div className="flex gap-2">
            <ThemeSwitcher isDark={isDark} setIsDark={setIsDark} />
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
