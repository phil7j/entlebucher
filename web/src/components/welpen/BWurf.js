import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ThreePicRow from "../ThreePicRow"

const BWurf = () => {
  const data = useStaticQuery(graphql`
    query {
      aslan: allFile(
        filter: { relativeDirectory: { eq: "aslan" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
      archie: allFile(
        filter: { relativeDirectory: { eq: "archie" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
      amira: allFile(
        filter: { relativeDirectory: { eq: "amira" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Container>
        <Title>
          <h4>Der B-Wurf von der Laughy</h4>
        </Title>
        <Description>
          <p>
            Pepper ist stolze Mutter ihres zweiten Wurfes! Am 12. & 13. August
            2020 haben diese 3 süsse & gesunde Welpen das Licht der Welt
            erblickt.{" "}
          </p>
        </Description>
      </Container>
      <ThreePicRow
        title={"Bailey"}
        description={"Geb. 12.08.2020, Gewicht: 420g"}
        data={data.aslan.edges}
      />
      <ThreePicRow
        title={"Belle"}
        description={"Geb. 12.08.2020, Gewicht: 400g"}
        data={data.archie.edges}
      />
      <ThreePicRow
        title={"Bilbo"}
        description={"Geb. 13.08.2020, Gewicht: 406g"}
        data={data.amira.edges}
      />
      <ThreePicRow
        title={"Bolt"}
        description={"Geb. 13.08.2020, Gewicht: 406g"}
        data={data.amira.edges}
      />
    </>
  )
}

const Description = styled.div`
  display: flex;
  margin-bottom: 30px;
  p {
    font-family: "Dosis";
    max-width: 500px;
    font-size: 18px;
    margin: 0;
    text-align: center;
  }
  @media (max-width: 862px) {
    justify-content: center;
    margin-right: 0;
    text-align: center;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  flex-grow: 1;
  margin-top: 30px;
  h4 {
    font-family: "Dosis", sans-serif;
    color: #d59d82;
    font-weight: 400;
    font-size: 26px;
    margin-bottom: 50px;
  }
  @media (max-width: 500px) {
    align-items: center;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  @media (max-width: 500px) {
    padding: 10px 0;
    justify-content: center;
  }
`

export default BWurf
