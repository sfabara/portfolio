import styled, { css } from "styled-components";
import { motion } from 'framer-motion'
import React from 'react'

export const PortfolioHeaderContainer = styled.section`
   display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10rem;
    flex: 1;

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
    flex-wrap:wrap;
    @media (max-width: 900px) {
        padding: 0 5rem 0 5rem
    }
`

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #00000020;
    border-radius: 15px;
    width: 80%;
    padding: 2rem;
    height: 10rem;
    flex-wrap:wrap;
    flex: 1;
    margin: 0rem 0rem 30rem 0rem;

    /* outline: 8px solid  #111318;
    -moz-outline-radius: 16px;
    box-shadow: 10px 10px 0px 20px #111318; */
`

export const ProjectImage = styled.img`
    display:flex;
    flex-direction: column;
    width: 50%;
    padding: 2rem;
    flex: 1;
    border-radius: 25px;
`
export const ProjectContent = styled.div`
    display:flex;
    flex-direction: column;
    padding: 2rem;
    flex: 1;

`
export const ProjectTitle = styled.h2`
    font-size: 3.2rem;
`
export const ProjectDescription = styled.p`
    font-size: 2.5rem;
    font-weight: 200;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 2.5rem 0 2.5rem 0;
    height: 100%;

    @media (max-width: 900px) {
        font-size: 2rem
    }
    `



///Headers stuffs


export const Header = styled.div`
margin-top: 5 rem ;
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
    width: 20rem;
    border-radius: 16px;
    outline: solid  #111318;
    -moz-outline-radius: 16px;
    box-shadow: 5px 5px 0px 4px #111318;
    cursor: pointer;
    justify-items: stretch;

    &:hover{
      background-color: #0000004c;
    }

    & h2{
        font-size: 1.9rem !important;
    }

    @media (max-width: 900px) {
        padding: 14px;
        width: 13rem;
        & h2{
            font-size: 1.5rem !important;
        }
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