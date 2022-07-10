import React, { useState, useEffect, useRef } from "react";
import { BiMenuAltRight } from 'react-icons/bi'
import { Link, Navigate } from "react-router-dom";
import { Switch } from "@material-ui/core";
import { ThemeProvider, useTheme } from "styled-components";
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
import { useLocation } from "react-router-dom";

setGlobal({ onTheme: true });

export function Nav({}) {
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
          <Link to="/" style={{ textDecoration: "none", }}>
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

  //ratchet af.

function NavItem(props) {


  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false)
  }, [pathname]);


  const catMenu = useRef(null)

  // const handleBlur = (e) => {
  //   console.log('on blur')
  //   setOpen(!open)
  // }
  const handleClose = (e) => {
    var menu = document.querySelector(".dropdown-menu");

    // console.log("menu", menu)
    if (menu) {


      console.log("target", menu.contains(e.target))

      if (catMenu.current && open && !menu.contains(e.target) && !catMenu.current.contains(e.target)) {
        console.log("closing...")
        setOpen(false)
      }

    }




  }
  document.addEventListener('mousedown', handleClose)

  const handleDropdown = () => {
    setOpen(!open)

  }



  const [open, setOpen] = useState(false);
  return (
    <NavItemStyle>
      <IconButtonStyle>
        <a href="#/" onClick={handleDropdown} ref={catMenu} >
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
    <DropDownStyle className="dropdown-menu">
      <IconButtonStyle>
        <Link to="/" >
          <DropdownItem leftIcon={<RiHomeHeartLine />}>
            <h3>Home</h3>
          </DropdownItem >
        </Link>
        <Link to="/portfolio" onMouseDown={(e) => e.preventDefault()}>
          <DropdownItem leftIcon={<RiBriefcase3Line />}>
            <h3>Portfolio</h3>
          </DropdownItem>
        </Link>
        {/* <Link to="/art" onMouseDown={(e) => e.preventDefault()}>
          <DropdownItem leftIcon={<RiPaintFill />}>
            <h3>Art</h3>
          </DropdownItem>
        </Link> */}


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
