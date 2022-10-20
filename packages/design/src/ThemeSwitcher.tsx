import { useEffect, useState } from "react";

const themeKey = "producktivity-theme";

/**
 * Do not have this at more than one position per page
 */
export const ThemeSwitcher = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const e = localStorage.getItem(themeKey);
    const a = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDark = !e || e === "auto" ? a : e === "dark";
    setDark(isDark);
  }, []);

  function handleToggle() {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(themeKey, "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem(themeKey, "dark");
      setDark(true);
    }
  }

  return <button onClick={handleToggle}>{dark ? "Dark" : "Light"}</button>;
};
