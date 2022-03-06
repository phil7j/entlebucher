import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ThreePicRow from "../ThreePicRow"

const BWurf = () => {
  const data = useStaticQuery(graphql`
    query {
      bailey: allFile(
        filter: { relativeDirectory: { eq: "bailey" } }
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
      belle: allFile(
        filter: { relativeDirectory: { eq: "belle" } }
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
      bilbo: allFile(
        filter: { relativeDirectory: { eq: "bilbo" } }
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
      bolt: allFile(
        filter: { relativeDirectory: { eq: "bolt" } }
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
            Pepper ist stolze Mutter ihres zweiten Wurfes! Am 12. Mai 2021 haben
            diese 4 süsse & gesunde Welpen das Licht der Welt erblickt.{" "}
          </p>
        </Description>
      </Container>
      <ThreePicRow
        title={"Bailey"}
        description={"Geb. 12.05.2021, Gewicht: 425g"}
        data={data.bailey.edges}
      />
      <ThreePicRow
        title={"Belle"}
        description={"Geb. 12.05.2021, Gewicht: 415g"}
        data={data.belle.edges}
      />
      <ThreePicRow
        title={"Bilbo"}
        description={"Geb. 12.05.2021, Gewicht: 325g"}
        data={data.bilbo.edges}
      />
      <ThreePicRow
        title={"Bolt"}
        description={"Geb. 12.05.2021, Gewicht: 400g"}
        data={data.bolt.edges}
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
