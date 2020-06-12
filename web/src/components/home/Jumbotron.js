import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pepper-home.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Heading>
        <h1>
          <span>Entlebucher</span> Sennenhunde
        </h1>
        <h2>von der Laughy</h2>
      </Heading>
      <FadeImage />
      <JumboImage
        fluid={data.file.childImageSharp.fluid}
        alt="Pepper"
        // loading="eager"
        // durationFadeIn={200}
        // backgroundColor="white"
        imgStyle={{ height: "80%" }}
      />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

const JumboImage = styled(Img)``

const FadeImage = styled.div`
  width: 100%;
  max-height: 100%;
  background: white;
  position: absolute;
  z-index: 1;
  opacity: 0.2;
`

const Heading = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  color: black;
  z-index: 2;
  left: 15%;
  top: 15%;
  h1 {
    span {
      font-style: italic;
    }
    font-family: "Abhaya Libre";
    font-weight: 400;
  }
  h2 {
    font-family: "Abhaya Libre";
    align-self: flex-end;
    font-weight: 400;
  }
`

export default Jumbotron
