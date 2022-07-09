import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from 'react-icons/bi'
import { Link, Navigate } from "react-router-dom";
import { Switch } from "@material-ui/core";
import { ThemeProvider , useTheme} from "styled-components";
import { getTheme } from "../../getTheme.js";
import {
  HeadStyle,
  DropDownStyle,
  NavLinksStyle,
  NavItemStyle,
  IconButtonStyle,
  MenuItemStyle,
} from "./styles/navStyles.js";
import { setGlobal, useGlobal } from "reactn";

import { RiHomeHeartLine, RiBriefcase3Line, RiPaintFill } from 'react-icons/ri'

import "./styles/Nav.css";

setGlobal({ onTheme: true });

export function Nav(props) {
  const [theme, setTheme] = useState("light");
  const [theTheme, setTheTheme] = useGlobal("onTheme");

  const cur_theme = useTheme()


  useEffect(() => {
    if (theTheme == false) setTheme("light");
    else setTheme("dark");

    window.addEventListener("scroll", function () {

      var header = document.querySelector("header");
      if (header)
        header.classList.toggle("sticky", window.scrollY > 0);
      return
    });
  });

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <HeadStyle>
        <Navbar>
          <Link to="/" style={{textDecoration: "none",}}>
            <h1 style={{ color: cur_theme.textColor, fontSize: "2.8rem", padding: "20px" }}>👨‍💻</h1>

          </Link>
          {/* <NavLink></NavLink> */}
          <NavItem icon={<BiMenuAltRight />}>
            <DropdownMenu />
          </NavItem>
        </Navbar>
      </HeadStyle>
    </ThemeProvider>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <ul className="navbar-nav" style={{ display: "flex", justifyContent: "space-between" }}>{props.children}</ul>
    </nav>
  );
}
/*

*/
function NavItem(props) {

  const handleBlur = (e) => {
    console.log('on blur')
    setOpen(!open)
  }
  const [open, setOpen] = useState(false);
  return (
    <NavItemStyle>
      <IconButtonStyle>
        <a href="#/" onClick={() => setOpen(!open)} >
          {props.icon}
        </a>

        {open && props.children}
      </IconButtonStyle>
    </NavItemStyle>
  );
}



function NavLink(props) {
  return (
    <NavLinksStyle>
      <li>
        <a href="/">🚀 Sebastian Fabara</a>
      </li>
    </NavLinksStyle>
  );
}

function DropdownMenu(props) {



  function DropdownItem(props) {
    return (
      <MenuItemStyle href="#/">
        <span className="icon-left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </MenuItemStyle>
    );
  }

  return (
    <DropDownStyle>
      <IconButtonStyle>
        {/* <DropdownItem leftIcon={<InfoIcon />}>
          <h3>About this website</h3>
        </DropdownItem> */}
        <Link to="/" onMouseDown={(e) => e.preventDefault()}>
          <DropdownItem leftIcon={<RiHomeHeartLine />}>
            <h3>Home</h3>
          </DropdownItem >
        </Link>
        <Link to="/portfolio" onMouseDown={(e) => e.preventDefault()}>
          <DropdownItem leftIcon={<RiBriefcase3Line />}>
            <h3>Portfolio</h3>
          </DropdownItem>
        </Link>
        <Link to="/art" onMouseDown={(e) => e.preventDefault()}>
          <DropdownItem leftIcon={<RiPaintFill />}>
            <h3>Art</h3>
          </DropdownItem>
        </Link>


        <DropdownItem
          leftIcon={<SwitchBitch theme={props.theme}></SwitchBitch>}
        >
          <h3>Night Mode</h3>
        </DropdownItem>
      </IconButtonStyle>
    </DropDownStyle>
  );
}

function SwitchBitch({ handleTheme }) {
  const [theme, setTheme] = useGlobal("onTheme");

  return <Switch checked={theme} onChange={() => setTheme(!theme)} onMouseDown={(e) => e.preventDefault()} ></Switch>;
}

/*
<Switch
checked={themeName.mode}
onChange={() => {
  setThemeName(
    themeName.mode === "THEMES.DARK?"
      ? { mode: "THEMES.LIGHT" }
      : { mode: "THEMES.DARK" }
  );
}}
/>

*/
