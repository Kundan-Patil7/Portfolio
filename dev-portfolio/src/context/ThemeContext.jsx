import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", isDarkMode);
  }, [isDarkMode]);

  // ✅ You forgot to define toggleDarkMode!
  const toggleDarkMode = () => {
    setIsDarkMode(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode: isDarkMode === "dark", toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// ❌ Typo: should be useTheme (not useTheame)
export const useTheme = () => useContext(ThemeContext);
