import React from "react";
import { useSelector } from "react-redux";

const ThemeProvider = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;
