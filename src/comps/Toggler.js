import React, { useState } from "react";
import { func, string } from "prop-types";
import DarkModeToggle from "react-dark-mode-toggle";

//onclick event for dark more toggle
const Toggle = ({ theme, toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div onClick={toggleTheme} style={{marginLeft: "-23%"}}>
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
    </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;


