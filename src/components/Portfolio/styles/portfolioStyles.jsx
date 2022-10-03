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
        padding: 0 0rem 0 0rem
    }
`

// =================================
// Project Card
// =================================

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center ;
    background-color: #00000010;
    border-radius: 15px;
    width: 80%;
    padding: 2rem;
    height: 10rem;
    flex-wrap:wrap;
    flex: 1;
    margin: 0rem 0rem 23rem 0rem;

    @media (max-width: 700px) {
        margin: 0rem 0rem 12rem 0rem
    }

    /* outline: 8px solid  #111318;
    -moz-outline-radius: 16px;
    box-shadow: 10px 10px 0px 20px #111318; */
`

export const ProjectImageContainer = styled.div`
width: 50rem;
min-height: 30rem;
max-height: 38rem;
display: flex;
justify-content: center;
align-items: center ;
/* background: ${(props) => props.theme.gradient}; */
/* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
border-radius: 10px ;
padding: 20px;
`


export const ProjectImage = styled.img`
    max-width:100%;
max-height:100%;
    object-fit: contain;
    border-radius: 10px;
`
export const ProjectContent = styled.div`
    display:flex;
    flex-direction: column;
    padding: 2rem;
    flex: 1;

`
export const ProjectTitle = styled.h2`
    font-size: 3.2rem;
    @media (max-width: 900px) {
        font-size: 2.5rem
    }
`
export const ProjectDescription = styled.p`
    font-size: 2.5rem;
    font-weight: 200;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 2.5rem 0 2.5rem 0;
    height: 100%;

    @media (max-width: 900px) {
        font-size: 1.9rem
    }
    `

export const TagContainer = styled.div`
    display: flex ;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap ;
    margin: 10px 0px 30px 0px;

`

export const Tag = styled.span`
    background-color:${(props) => props.theme.accent};
    padding: 5px 10px 5px 10px;
    margin: 5px;
    border-radius: 10px ;  
    font-size: 2rem ;
    @media (max-width: 900px) {

            font-size: 1.5rem ;
    }

`


///Headers stuffs


export const Header = styled.div`
margin-top: 5 rem ;
@media (max-width: 900px) {
        & h1{
            font-size: 4rem ;
        }
    }
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
            font-size: 1.4rem !important;
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