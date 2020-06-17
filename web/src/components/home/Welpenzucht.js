import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const WelpenZucht = () => {
  return (
    <Container>
      <Heading>
        <h2>
          Welpen<span>zucht</span>
        </h2>
        <Description>Zurzeit haben wir keine Welpen. </Description>
      </Heading>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  h2 {
    span {
      font-style: italic;
    }
    font-family: "Abhaya Libre";
    font-weight: 400;
  }
`

const Description = styled.div`
  color: black;
`

export default WelpenZucht
