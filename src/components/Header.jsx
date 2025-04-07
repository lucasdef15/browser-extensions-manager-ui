import LogoLight from "../assets/images/logo-light.svg?react";
import LogoDark from "../assets/images/logo-dark.svg?react";
import Moon from "../assets/images/icon-moon.svg?react";
import Sun from "../assets/images/icon-sun.svg?react";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : false;
  });

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="lg:max-w-[1768px] mx-auto dark:bg-neutral-700 bg-neutral-0 w-[90%] shadow-md flex justify-between rounded-10 p-2">
      <div>
        {isDarkMode ? (
          <LogoLight className="h-[41px] w-[179px]" />
        ) : (
          <LogoDark className="h-[41px] w-[179px]" />
        )}
      </div>

      <section className="self-center">
        <button
          onClick={toggleDarkMode}
          className="cursor-pointer focus:outline-offset-2 focus:outline-red-500 active:bg-[#808fc02a] dark:hover:bg-[#808fc073] dark:bg-[#808fc02a] bg-[#808fc018] hover:bg-[#808fc052] p-1.5 rounded-6 transition-all"
        >
          {isDarkMode ? <Sun /> : <Moon />}
        </button>
      </section>
    </header>
  );
};

export default Header;
