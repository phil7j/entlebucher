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
            <h1>Entlebucher Sennenhunde</h1>
            <h2>von der Laughy</h2>
            </Heading>
            <FadeImage />
            <JumboImage
            fluid={data.file.childImageSharp.fluid}
            alt="Pepper"
            // loading="eager"
            // durationFadeIn={200}
            // backgroundColor="white"
            imgStyle={{ top: "-130px"}}
          />

        </Container>
          
          )
            
}

const Container = styled.div`
width: 100%;
`

const JumboImage = styled(Img)`

`

const FadeImage = styled.div`
width: 100%;
height: 100%;
background:white;
position: absolute;
z-index: 1;
opacity: .2;
`

const Heading = styled.div`
position: absolute;
color: black;
z-index: 2;
h1 {
font-family: "Abhaya Libre";
font-weight: 400;

}
h2 {
    font-family: "Abhaya Libre";
}
`

export default Jumbotron

