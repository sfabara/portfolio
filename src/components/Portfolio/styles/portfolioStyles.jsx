import styled, { css } from "styled-components";
import { motion } from 'framer-motion'
import React from 'react'

export const PortfolioHeaderContainer = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20rem;

    & h1{
        font-size: 5rem;
        text-align: center;
    }
    & h3{
        font-size: 2rem;
        font-weight: 100;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif !important;
    }
    & p {
        font-size: 2rem;
        margin: 0rem;
        text-align: center;
    }
`
export const PortfolioContent = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 20rem 0 20rem;
`

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #00000020;
    border-radius: 10px;
    width: 100%;
    padding: 2rem;
    height: 39rem;
`
export const ProjectImage = styled.img`
    display:flex;
    flex-direction: column;
    width: 600px;
    padding: 2rem;

`
export const ProjectContent = styled.div`
    display:flex;
    flex-direction: column;
    padding: 2rem;

`
export const ProjectTitle = styled.h2`
    font-size: 3.2rem;
    text-decoration: underline;
`
export const ProjectDescription = styled.p`
    font-size: 3rem;
    font-weight: 100;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif !important;
    padding: 2.5rem 0 2.5rem 0;
    `



export const Header = styled.div`
        border-radius: 10px;
`

export const SubHeader = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    flex-wrap: wrap;
    padding-top: 1rem;
    & h3{
        font-family: monospace !important;
        font-weight: 100;
    }
    & a{
        font-family: monospace !important;
        font-weight: 100;
    }
`



export const Description = styled.div`
padding-top: 1rem;

    width: 70rem;
    & p {
        font-weight: 200;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 2.5rem;
    }

`


export const MyButton = styled(motion.div)`
    align-self: center;
   
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme.fancyButtonColor};
    padding: 20px;
    width: 10rem;
    border-radius: 16px;
    outline: solid  #111318;
    -moz-outline-radius: 16px;
    box-shadow: 5px 5px 0px 4px #111318;
    cursor: pointer;
    &:hover{
      background-color: #0000004c;
    }

    & h2{
        font-size: 1.6rem !important;
    }

`;

export const Button = ({ onClick, children, className }) => {
    return (
        <MyButton
            className={className}
            whileHover={{
                scale: 1.1,
                transition: { duration: .3 },
            }}
            whileTap={{ scale: 0.9 }} onClick={onClick} >
            {children}
        </MyButton>
    )
}