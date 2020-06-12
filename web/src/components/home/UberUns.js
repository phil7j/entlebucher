import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const UberUns = () => {
  return (
    <Container>
      <Heading>
        <h2>
          Über<span>uns</span>
        </h2>
        <Description>
          Willkommen im Zürcher Oberland, wo rassenreine Entlebucher-Sennenhunde
          mit dem Zuchtnamen "Von der Laughy" gezüchtet werden.
        </Description>
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

export default UberUns
