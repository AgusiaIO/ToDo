import ThemeSwitcher from "./ThemeSwitcher";
import React from "react";

export const Header: React.FC<{
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}> = (props) => {
  return (
    <header className="dark:text-lightDarker flex text-grayWhite">
      <div className="container">
        <nav className="bg-darkLighter dark:bg-lightLighter flex items-center justify-between rounded-b-xl p-6 text-4xl">
          <h1>Aga ToDo</h1>
          <div className="flex gap-2">
            <ThemeSwitcher isDark={props.isDark} setIsDark={props.setIsDark} />
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
