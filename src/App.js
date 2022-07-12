import React, { useState, useEffect } from "react";
import { Nav } from "./components/Layout/Nav.js";
import { Social } from "./components/Layout/Social.js";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./getTheme.js";
import { Footer, FooterText, Root } from "./styles/appStyles.js";
import "./styles/App.css";
import { setGlobal, useGlobal } from "reactn";

// React Routing
import { Routes, Route, withRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.js"
import PortfolioPage from "./pages/PortfolioPage"
import ArtPage from "./pages/ArtPage"

const App = () => {

  const [theme, setTheme] = useState("dark");
  const [theTheme, setTheTheme] = useGlobal("onTheme");

  console.log("Theme: ", useGlobal("onTheme")[0]);

  useEffect(() => {
    if (theTheme == false)
      setTheme("light");
    else
      setTheme("dark");
  });
  return (
    <div className="App">
      <ThemeProvider theme={getTheme(theme)}>
        <Nav setTheme={setTheme} />

        <Root>
          {/* <Social /> */}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="art" element={<ArtPage />} />
          </Routes>


          <Footer>
            <FooterText href="https://github.com/sfabara/portfolio" target="_blank">
              Designed & Developed by Sebastian Fabara
            </FooterText>


          </Footer>

        </Root>


      </ThemeProvider>

    </div>)

}






export default App;