import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pepper-home.png" }) {
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
      <JumboImage fluid={data.file.childImageSharp.fluid} alt="Pepper" />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  position: relative;
`

const JumboImage = styled(Img)`
  max-height: 900px;
`

const FadeImage = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  top: 0;
  z-index: 1;
  opacity: 0.4;
`

const Heading = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  color: black;
  z-index: 2;
  left: 18%;
  top: 25%;
  h1 {
    span {
      font-style: italic;
    }
    font-family: "Abhaya Libre";
    font-weight: 600;
    letter-spacing: 1px;
  }
  h2 {
    font-family: "Abhaya Libre";
    align-self: flex-end;
    font-weight: 500;
    letter-spacing: 1px;
  }
  @media (max-width: 1370px) {
    top: 150px;
    left: 100px;
  }
  @media (max-width: 1090px) {
    justify-content: space-between;
    top: 80px;
    left: 70px;
    h1 {
      font-size: 30px;
      align-self: center;
    }
    h2 {
      font-size: 25px;
      align-self: flex-end;
    }
  }
  @media (max-width: 700px) {
    top: 0;
    bottom: 900px;
    position: sticky;
    h1 {
      font-size: 25px;
      align-self: center;
    }
    h2 {
      font-size: 20px;
      align-self: center;
    }
  }
`

export default Jumbotron
