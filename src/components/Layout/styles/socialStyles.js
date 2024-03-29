import styled, { css } from "styled-components";
import React from 'react'
import { motion } from 'framer-motion'

export const SocialStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.accent};
  position: fixed;
  margin: 24rem 0rem 0rem 0rem;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 5px 5px 10px #00000040;
  height: 20rem;
  & svg:hover{
    color: ${(props) => props.theme.hoverColor};
    cursor: pointer;
  }
  & li{
    padding: .5rem;
  }

  @media (max-width: 900px) {
      padding: 0;
      height: 0rem;
      & svg{
        width: 80%;
      }

    }
`;


export const SocialStyles2 = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap ;
  margin: 5rem;
  border-radius: 1rem;
  width: 60rem;
  padding: 50px;
  box-shadow: #00000020 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  & svg:hover{
    color: ${(props) => props.theme.hoverColor};
    cursor: pointer;
  }
  & li{
    padding: .5rem;
  }

   @media (max-width: 900px) {
      width: 80%;

    }


`;


export const MyButton = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme.fancyButtonColor};
    padding: 20px;
    margin: 4rem;
    border-radius: 16px;
    outline: solid  #111318;
    -moz-outline-radius: 16px;
    box-shadow: 5px 5px 0px 4px #111318;
    cursor: pointer;
    &:hover{
      background-color: #0000004c;
    }

`;


export const SocialBtn = styled(motion.div)`


`

export const Button = ({ onClick, children, className }) => {
  return (
    <SocialBtn
      className={className}
      whileHover={{
        scale: 1.5,
        transition: { duration: .3 },
      }}
      whileTap={{ scale: 10 }} onClick={onClick} >
      meoww
      {children}
    </SocialBtn>
  )
}
