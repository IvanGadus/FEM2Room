import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
    body {
        overflow: ${props => props.overflow};
    }
`

const NavigationWrapper = styled.nav`
    position: absolute;
    display: flex;
    margin: 30px 0 40px 40px;
    align-items: center;
    gap: 60px;
    justify-content: center;

    @media (max-width: 510px){
        width: inherit;
        justify-content: center;
        margin-left: 0;
        margin-right: 0;
    }
`

const MoblieNavigationWrapper = styled.nav`
    position: absolute;
    display: flex;
    padding: 30px 40px 30px 40px;
    align-items: center;
    width: inherit;
    background-color: white;
    z-index: 6;
    justify-content: space-between;
    display: none;
    transition: 300ms;
    top: ${props => props.top};

    @media (max-width: 510px){
        display: flex;
    }
`

const MobileNavList = styled.ul`
    display: flex;
    height: 36px;
    flex-direction: row;
    gap: 20px;
    list-style-type: none;
    z-index: 5;
    align-items: center;

    @media (max-width: 510px){
        gap: 0px;
    }
`

const Logo = styled.h2`
    color: white;
    cursor: pointer;
    font-size: 1.7rem;
    z-index: 5;
`

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 20px;
    list-style-type: none;
    z-index: 5;
    height: 36px;
    align-items: center;

    @media (max-width: 510px){
        display: none;
    }
`


const HamburgerButton = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    z-index: 6;
    height: 100%;
    left: 40px;
    display: none;
    cursor: pointer;
    transition: 300ms;

    @media (max-width: 510px){
        display: ${props => props.display};
        align-items: center;
    }
`

const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    z-index: 6;
    height: 100%;
    left: 40px;
    cursor: pointer;
`

const BodyShadow = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
    opacity: 0.4;
    left: 0;
    top: 0px;
    position: absolute;
    z-index: 2;
    display: ${props => props.display};
`

export default function Navigation() {
  const [wrapperStyles, setWrapperStyles] = useState({
    top: "-100px",
    display: "flex",
    displayShadow: "none",
    overflow: "auto"
  })

  const handleHamburgerClick = () => {
    setWrapperStyles({
        top: "0",
        display: "none",
        displayShadow: "block",
        overflow: "hidden"
    })
  }

   const handleCloseClick = () =>{
    setWrapperStyles({
        top:"-100px",
        display:"flex",
        displayShadow: "none",
        overflow: "auto"
    })
   }

  return (
    <>
        <GlobalStyle overflow={wrapperStyles.overflow} />
        <BodyShadow display={wrapperStyles.displayShadow} onClick={handleCloseClick} />
        <MoblieNavigationWrapper top={wrapperStyles.top} onClick={handleCloseClick}>
            <CloseButton>
                <img src="../../images/icon-close.svg" alt="close button" />
            </CloseButton>
            <MobileNavList>
                <li><a className='blackText' href="">home</a></li>
                <li><a className='blackText' href="">shop</a></li>
                <li><a className='blackText' href="">about</a></li>
                <li><a className='blackText' href="">contact</a></li>
            </MobileNavList>
        </MoblieNavigationWrapper>

        <NavigationWrapper>
            <HamburgerButton display={wrapperStyles.display} onClick={handleHamburgerClick}>
                <img src="../../images/icon-hamburger.svg" alt="hamburger button" />
            </HamburgerButton>
            <Logo>room</Logo>
            <NavList>
                <li><a href="">home</a></li>
                <li><a href="">shop</a></li>
                <li><a href="">about</a></li>
                <li><a href="">contact</a></li>
            </NavList>
        </NavigationWrapper>
    </>
  )
}
