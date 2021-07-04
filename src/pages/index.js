import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <h1>Gatsby Starter</h1>
        {/* You need to be outside of the src file because of the config you set */}
        <StaticImage
          src="../assets/makeup.jpg"
          width={500}
          alt="Makeup"
          placeholder="blurred"
          quality="100"
          transformOptions={{ grayscale: true }}
          backgroundColor="cyan"
        />
        <StaticImage
          src="../assets/makeup.jpg"
          width={500}
          alt="Makeup"
          placeholder="blurred"
          quality="100"
          transformOptions={{ grayscale: true }}
          backgroundColor="magenta"
        />
      </div>
    </React.Fragment>
  )
}
