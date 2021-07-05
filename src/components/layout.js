import React from "react"
import "../scss/styles.scss"
import Header, { Logo, Navigation, MenuItem } from "./Header"
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* Header */}

      <Header>
        <Logo>Starter</Logo>
        <Navigation>
          <MenuItem slug="/">Home</MenuItem>
          <MenuItem slug="/about">About</MenuItem>
          <MenuItem slug="/contact">Contact</MenuItem>
        </Navigation>
      </Header>

      <div className="wrapper">{children}</div>
    </React.Fragment>
  )
}

export default Layout
