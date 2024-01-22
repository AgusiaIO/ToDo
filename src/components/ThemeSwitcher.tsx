import React, { useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const [darkMode, isDarkMode] = useState(true);

  return (
    <button
      className="px-1 transition-transform duration-300 hover:scale-110"
      onClick={() => isDarkMode(!darkMode)}
    >
      {darkMode ? (
        <svg
          className="h-8 w-8 fill-current"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 107q-62 0-105.5 43.5T107 256t43.5 105.5T256 405t105.5-43.5T405 256t-43.5-105.5T256 107m0 256q-45 0-76-31t-31-76t31-76t76-31t76 31t31 76t-31 76t-76 31m21-299V21q0-21-21-21t-21 21v43q0 21 21 21t21-21M85 256q0-21-21-21H21q-21 0-21 21t21 21h43q21 0 21-21m406-21h-43q-21 0-21 21t21 21h43q21 0 21-21t-21-21M256 427q-21 0-21 21v43q0 21 21 21t21-21v-43q0-21-21-21m164-305l22-22q14-14 0-30q-16-14-30 0l-22 22q-14 14 0 30q8 6 15 6q9 0 15-6m-313 6q7 0 15-6q14-16 0-30l-22-22q-14-14-30 0q-14 16 0 30l22 22q6 6 15 6m313 262q-14-14-30 0q-14 16 0 30l22 22q6 6 15 6q7 0 15-6q14-16 0-30zm-328 0l-22 22q-14 14 0 30q8 6 15 6q9 0 15-6l22-22q14-14 0-30q-16-14-30 0" />
        </svg>
      ) : (
        <svg
          className="h-8 w-8 fill-none stroke-current stroke-2"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 2C9 2 3 7 3 15s6 14 14 14s13-6 13-11C19 25 7 13 14 2" />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
