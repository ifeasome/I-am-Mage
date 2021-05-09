import React, { useState } from "react";
import ImageGrid from "../comps/ImageGrid";
import Title from "../comps/Title";
import UploadForm from "../comps/UploadForm";
import Modal from "../comps/Modal";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../comps/GlobalStyles.js";
import { lightTheme, darkTheme } from "../comps/Themes";
import { DarkMode } from "../comps/DarkMode";
import Toggle from "../comps/Toggler";
import "../index.css";

// components loaded for home page display
function Home() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [theme, themeToggler, mountedComponent] = DarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
        <Toggle theme={theme} toggleTheme={themeToggler} />
          <Title />
          <UploadForm />
          <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default Home;
