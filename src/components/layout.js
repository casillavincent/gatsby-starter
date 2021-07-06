import React from "react"
import "../scss/styles.scss"
import Header, { Logo, Navigation, MenuItem } from "./Header"
import styled from "styled-components"

/* 
----------------------------------
    Styled Components
----------------------------------
*/
const Wrapper = styled.div`
  max-width: 1920px;
  width: 100%;
`
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* Header */}

      <Header>
        <Logo>Starter</Logo>
        <Navigation>
          <MenuItem slug="/">Home</MenuItem>
          <MenuItem slug="/about">About</MenuItem>
          <MenuItem slug="/blog">Blog</MenuItem>
          <MenuItem slug="/contact">Contact</MenuItem>
        </Navigation>
      </Header>

      <Wrapper className="wrapper">{children}</Wrapper>
    </React.Fragment>
  )
}

export default Layout
