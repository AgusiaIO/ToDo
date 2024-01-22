import ThemeSwitcher from "./ThemeSwitcher";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex text-grayWhite">
      <div className="container">
        <nav className="flex items-center justify-between rounded-b-xl bg-darkLighterBg p-6 text-4xl ">
          <h1>Aga ToDo</h1>
          <div className="flex gap-2">
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
