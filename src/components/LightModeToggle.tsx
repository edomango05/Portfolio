"use client"

import { useEffect, useState,createElement } from "react";
import { useMediaQuery } from "react-responsive";

//component for light mode toggle
export default function LightModeToggle() {
  //setting a react hook for darkmode 
  const [isDark, setIsDark] = useState(true);
  //local function that handles toggle
  const toggleTheme = (toSetLight: boolean) => {
    //saving on theme local storage preference
    localStorage.setItem("theme", toSetLight ? "light" : "dark");
    //changing the hook state
    setIsDark(toSetLight);
  };

  //execute this code on client rendering
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      localStorage.setItem("theme", "dark");
    }
    toggleTheme(localStorage.getItem("theme") !== "dark")
  }, []); 

  //see if system preference is dark
  useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => toggleTheme(isSystemDark)
  );
  //add/remnove class dark to body in order to change theme ( whatching changes on css)
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);
  //returning the react component
  return (
    <div className="wrapper">
      <input type="checkbox" id="hide-checkbox" onClick={() => toggleTheme(!isDark)} checked={!isDark} onChange={() => {}}></input>
      <label htmlFor="hide-checkbox" className="toggle">
        <span className="toggle-button">
        </span>
      </label>
    </div>
  )
}