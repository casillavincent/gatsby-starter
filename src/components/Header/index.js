import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Spin as Hamburger } from "hamburger-react"

/* Styled Components */
const StyledHeader = styled.header`
  width: 100%;
  height: 75px;
  border: 1px dashed red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledNavigation = styled.nav`
  position: fixed;
  top: 75px;
  left: 0;
  width: 100%;
  height: 50vh;
  min-height: 300px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")}
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border: 1px dashed magenta;
  padding: 20px 0;
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
`

const StyledLink = styled(Link)`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  transition: 0.15s ease-out;
  &:hover {
    background: rgb(238, 218, 247);
  }
`

/* Main component to render */
const Header = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledHeader className="site-header" id="site-header">
      {children}
      <Hamburger size="22" toggled={isOpen} toggle={setIsOpen} />
    </StyledHeader>
  )
}
export const Logo = ({ children }) => {
  return (
    <div className="brand-logo" id="brand-logo">
      {children}
    </div>
  )
}

export const Navigation = ({ children }) => {
  return (
    <StyledNavigation
      isOpen={isOpen}
      className="main-navigation nav-ul"
      id="main-navigation"
    >
      {children}
    </StyledNavigation>
  )
}

export const MenuItem = ({ children }) => {
  return (
    <StyledLi className="menu-item nav-li">
      <StyledLink to={"/"}>{children}</StyledLink>
    </StyledLi>
  )
}

export default Header

/* The issue -> how to pass the prop isOpen to navigation? */
