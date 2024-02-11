"use client"

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";


export default function LightModeToggle() {

  const [isDark, setIsDark] = useState(true);

  useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="wrapper">
      <input type="checkbox" id="hide-checkbox" onClick={()=>setIsDark(!isDark)} defaultChecked={!isDark}></input>
      <label htmlFor="hide-checkbox" className="toggle">
        <span className="toggle-button">
        </span>
      </label>
    </div>
  )
}