import React from "react"
import "../scss/styles.scss"
import Header, { Logo, Navigation, MenuItem } from "./Header"
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header>
        <Logo>Starter</Logo>

        <Navigation>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Navigation>
      </Header>
      <div className="wrapper">{children}</div>
    </React.Fragment>
  )
}

export default Layout
