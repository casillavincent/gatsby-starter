import React, { useState, useContext, createContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Spin as Hamburger } from "hamburger-react"

/* Context */
export const HeaderContext = createContext(false)

/* Styled Components */
const StyledHeader = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(250, 250, 250);

  @media screen and (min-width: 50em) {
    justify-content: space-around;
  }
`

const StyledNavigation = styled.nav`
  position: fixed;
  top: 75px;
  left: 0;
  width: 100%;
  height: 50vh;
  min-height: 300px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(250, 250, 250);
  padding: 20px 0;

  // Breakpoint
  @media screen and (min-width: 50em) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: static;
    width: auto;
    height: auto;
    min-height: unset;
    background-color: transparent;
  }
`

const StyledLi = styled.li`
  margin: 0 0 15px 0;
  width: 125px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  @media screen and (min-width: 50em) {
    margin: 0;
  }
`

const StyledLink = styled(Link)`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`

const StyledSiteBranding = styled.div`
  margin: 0 0 0 10px;
`
const HamburgerWrapper = styled.div`
  @media screen and (min-width: 50em) {
    display: none;
  }
`
/* 
----------------------------------
    Parent Header Component
----------------------------------
*/
const Header = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledHeader className="site-header" id="site-header">
      <HeaderContext.Provider value={isOpen}>
        {children}
        <HamburgerWrapper>
          <Hamburger size="22" toggled={isOpen} toggle={setIsOpen} />
        </HamburgerWrapper>
      </HeaderContext.Provider>
    </StyledHeader>
  )
}

/* 
----------------------------------
    Child Components
----------------------------------
*/
export const Logo = ({ children }) => {
  return (
    <StyledSiteBranding className="site-logo" id="site-logo">
      <Link to="/"> {children}</Link>
    </StyledSiteBranding>
  )
}

export const Navigation = ({ children }) => {
  const isOpen = useContext(HeaderContext)
  return (
    <StyledNavigation
      className="main-navigation nav-ul"
      id="main-navigation"
      isOpen={isOpen}
    >
      {children}
    </StyledNavigation>
  )
}

export const MenuItem = ({ children, slug }) => {
  return (
    <StyledLi className="menu-item nav-li">
      <StyledLink to={slug}>{children}</StyledLink>
    </StyledLi>
  )
}

export default Header
