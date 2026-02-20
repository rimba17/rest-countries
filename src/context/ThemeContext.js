"use client";

import { createContext, useState, useEffect } from "react";
export const ContextTheme = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";

    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!theme) return;
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ContextTheme.Provider value={{ theme, setTheme }}>
      {children}
    </ContextTheme.Provider>
  );
};
