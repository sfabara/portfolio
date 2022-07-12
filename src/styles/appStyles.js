import styled, { css } from "styled-components";

export const Root = styled.html`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.background};
  height: 100%;
`;

export const Meow = styled.button`
  color: ${(props) => props.theme.hoverColor};
  background-color: ${(props) => props.theme.hoverColor};
  margin: 2rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center ; 
  justify-content: center ;
`
export const FooterText = styled.a`
  font-size: 15px;
  margin: 5rem;
  text-decoration: none ;
  color: inherit;

  &:hover{
    font-weight: 600;
    transition: .1s ;
    font-size: 16px;
    text-decoration: underline;
  }


`



const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};