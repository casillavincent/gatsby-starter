import React from "react"
import Layout from "../components/layout"
import Hero, { HeroHeadline, HeroTitle, HeroLink } from "../components/Hero"
export default function Home() {
  return (
    <React.Fragment>
      <Layout>
        <Hero>
          <HeroTitle>Gatsby Starter</HeroTitle>
          <HeroHeadline>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
            ratione.
          </HeroHeadline>
          <HeroLink slug="/contact">Latest Posts</HeroLink>
        </Hero>
      </Layout>
    </React.Fragment>
  )
}
