import React, { useState, useEffect } from "react";
import { Nav } from "../components/Nav.js";
import { Home } from "../components/Home.js";
import { Social } from "../components/Social.js";
// import { ThemeProvider } from "styled-components";
// import { THEMES } from "../constants/theme";
// import { getTheme } from "../getTheme.js";
import { Root } from "../styles/appStyles.js";
// import { setGlobal, useGlobal } from "reactn";

// // React Routing
// import { Routes, Route, Link } from "react-router-dom";

function HomePage() {
//   const [theme, setTheme] = useState("dark");
//   const [theTheme, setTheTheme] = useGlobal("onTheme");

//   console.log("Theme: ", useGlobal("onTheme")[0]);

//   useEffect(() => {
//     if (theTheme == false) setTheme("light");
//     else setTheme("dark");
//   });

  return (
          <Home/>
  );
}

export default HomePage;
