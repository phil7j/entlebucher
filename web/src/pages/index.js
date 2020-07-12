import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Jumbotron from "../components/home/Jumbotron"
import UberUnsHome from "../components/home/UberUnsHome"
import UnsereHundinHome from "../components/home/UnsereHundinHome"
import WelpenzuchtHome from "../components/home/WelpenzuchtHome"
import Termin from "../components/home/Termin"

const IndexPage = () => {
  return (
    <Container>
      <SEO title="Home" />
      <Jumbotron />
      <UberUnsHome />
      <UnsereHundinHome />
      <WelpenzuchtHome />
      <Termin />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: fit-content(1fr) 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "Jumbotron"
    "UberUns"
    "UnsereHundin"
    "Welpenzucht"
    "Termin";
`

export default IndexPage
