import styled, { css } from "styled-components";
import{ motion} from 'framer-motion'
import React from 'react'

export const HeadStyle = styled.header`
  position: fixed;
  width: 100%;
  background-color: transparent;
  top: 0rem;
  transition: 0.6s;
  z-index: 100000;
  text-decoration: none;
  background: inherit;
  
  &.sticky{
    background-color: ${(props) => props.theme.nav}; 
    backdrop-filter: saturate(180%) blur(50px);
  }


`;

export const DropDownStyle = styled.div`
  position: absolute;
  left: 28px;
  top: 70px;
  width: 25rem;
  transform: translateX(-90%);
  background-color: ${(props) => props.theme.accent};
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;
  outline: 0;
  text-decoration: none;
  box-shadow: 4px 4px 15px #00000080;
  & h3 {
    color: ${(props) => props.theme.textColor};
    font-size: 2rem;
    margin: 0rem 2rem;
    text-decoration: none;
  }
`;

export const NavLinksStyle = styled.div`
  display: flex;
  flex-grow: 9;
  position: relative;
  justify-content: flex-start;
  & ul {
    position: relative;
  }
  & li {
    display: inline;
    margin: 0rem 0rem 0rem 5rem;
    font-size: 3.6rem;
    position: relative;
  }
  & a {
    display: inline-block;
    margin: 1rem 0rem;
    text-decoration: none;
    font-weight: bold;
    position: relative;
    color: ${(props) => props.theme.textColor};
  }
  & a:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;

export const NavItemStyle = styled.li`
  width: calc(var(--nav-size) * 0.8);
  position: relative;
  display: flex;
  margin: 1rem;
  justify-content:center ;
  align-items: center ;
  & a {
    position: relative;
    text-decoration: none;
  }
`;

export const IconButtonStyle = styled.div`
  & svg {
    --button-size: calc(var(--nav-size) * 0.5);
    width: var(--button-size);
    height: var(--button-size);
    background-color: ${(props) => props.theme.buttonColor};
    border-radius: 10%;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    color: ${(props) => props.theme.background};
  }
  & svg:hover {
    box-shadow: 5px 2px 20px #00000050;
    background-color: ${(props) => props.theme.hoverColor};
  }
`;


export const IconContainer = ({ children }) => {
  return (
    <motion.div>
      {children}
    </motion.div>

  )
}



//inside the navbar here

export const MenuItemStyle = styled.a`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 1.5rem;
  outline: 0;
  &:hover {
    background-color: #52535770;
  }
`;
