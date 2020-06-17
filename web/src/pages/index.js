import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Jumbotron from "../components/home/Jumbotron"
import UberUns from "../components/home/UberUns"
import UnsereHundin from "../components/home/UnsereHundin"
import Welpenzucht from "../components/home/Welpenzucht"
import Termin from "../components/home/Termin"

const IndexPage = () => {
  return (
    <Container>
      <SEO title="Home" />
      <Jumbotron />
      <UberUns />
      <UnsereHundin />
      <Welpenzucht />
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
