import React, { useState, useEffect } from "react";
import { Nav } from "./components/Nav.js";
import { Home } from "./components/Home.js";
import { Social } from "./components/Social.js";
import { ThemeProvider } from "styled-components";
import { THEMES } from "./constants/theme";
import { getTheme } from "./getTheme.js";
import { Root } from "./styles/appStyles.js";
import "./styles/App.css";
import { setGlobal, useGlobal } from "reactn";

// React Routing
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js"
import PortfolioPage from "./pages/PortfolioPage"
import ArtPage from "./pages/ArtPage"

const App = () => {

  const [theme, setTheme] = useState("dark");
  const [theTheme, setTheTheme] = useGlobal("onTheme");

  console.log("Theme: ", useGlobal("onTheme")[0]);

  useEffect(() => {
    if (theTheme == false) setTheme("light");
    else setTheme("dark");
  });
  return (
    <div className="App">
      <ThemeProvider theme={getTheme(theme)}>
        <Root>
          <Nav />
          <Social />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="art" element={<ArtPage />} />

          </Routes>

        </Root>




      </ThemeProvider>


    </div>)

}

export default App;