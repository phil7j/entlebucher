import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Termin = () => {
  return (
    <Container>
      <Heading>
        <h3>
          Möchten Sie den <span>Entlebucher</span>-Sennenhund näher{" "}
          <span>kennenlernen</span>?
        </h3>
        <Description>
          Sie können uns gerne in unserer Zuchtstätte besuchen!
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
  h3 {
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

export default Termin
