import styled, { css } from "styled-components";
import{ motion} from 'framer-motion'
import React from 'react'

export const HomeContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15rem;

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


export const Banner = styled.div`
    background-color: ${(props) => props.theme.accent};
    display: flex;
    padding: 15px;
    border-radius: 8px;
    margin: 40px;

    & h3{
        font-size: 2.0rem;
    }
`


export const TechStack = styled.div``


export const Header = styled.div`
        margin: 5px;
        padding: 5px;
        border-radius: 10px;
`

export const SubHeader = styled.div`

    & h3{
        font-family: monospace !important;
        font-weight: 100;
    }


`
export const Description = styled.div `
    width: 70rem;
    margin: 30px;
    & p {
        font-weight: 200;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 2.5rem;
    }

`


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




export default Button;

//     .home - container h1 {
//         font-size: 5rem;
// text - align: center;
//   }
//   .home - container p {
//     font - size: 2rem;
//     text - align: center;
//     margin: 0rem 0rem 0rem 5rem;
// }
