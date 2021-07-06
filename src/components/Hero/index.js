import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
/* 
----------------------------------
    Styled Components
----------------------------------
*/
const StyledHero = styled.section`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  @media screen and (min-width: 50em) {
    height: 100vh;
    min-height: 750px;
  }
`
const StyledTitle = styled.h1`
  text-align: center;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 50em) {
    font-size: 3em;
  }
`
const StyledHeadline = styled.p`
  text-align: center;
  @media screen and (min-width: 50em) {
    max-width: 60%;
    margin-right: auto;
    margin-left: auto;
  }
`
const StyledLink = styled(Link)``
/* 
----------------------------------
    Parent Hero Component
----------------------------------
*/
const Hero = ({ children }) => {
  return (
    <StyledHero className="hero-section" id="hero-section">
      {children}
    </StyledHero>
  )
}

/* 
----------------------------------
    Children
----------------------------------
*/

// Title
export const HeroTitle = ({ children }) => {
  return (
    <StyledTitle className="site-title" id="site-title">
      {children}
    </StyledTitle>
  )
}

// Headline
export const HeroHeadline = ({ children }) => {
  return <StyledHeadline>{children}</StyledHeadline>
}

// Link
export const HeroLink = ({ children, slug }) => {
  return (
    <StyledLink to={slug} className="primary-button">
      {children}
    </StyledLink>
  )
}

export default Hero
