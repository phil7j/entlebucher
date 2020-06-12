import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Jumbotron from "../components/home/Jumbotron"
import UberUns from "../components/home/UberUns"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Jumbotron />
      <UberUns />
    </>
  )
}

export default IndexPage
