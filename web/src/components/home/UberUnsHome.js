import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const UberUnsHome = () => {
  const data = useStaticQuery(graphql`
    query UberUnsHome {
      paw: file(relativePath: { eq: "paw.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      ownerDog: file(relativePath: { eq: "owner-dog.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      certified: file(relativePath: { eq: "certified.png" }) {
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
      {console.log(data)}
      <Heading>
        <h2>
          Über<span> uns</span>
        </h2>
        <Description>
          Willkommen im Zürcher Oberland, wo rassenreine Entlebucher-Sennenhunde
          mit dem Zuchtnamen "Von der Laughy" gezüchtet werden.
        </Description>
      </Heading>
      <CardHolder>
        <Card>
          <ImgContainer>
            <Img fluid={data.paw.childImageSharp.fluid} alt="A dog paw" />
          </ImgContainer>
          <h4>Der Entlebucher</h4>
          <p>
            Der Entlebucher-Sennenhund ist der kleinste der Schweizer
            Sennenhunde und stammt aus dem Entlebuch im Kanton Bern und Luzern,
            Schweiz
          </p>
        </Card>
        <Card>
          <ImgContainer style={{ width: 35 }}>
            <Img fluid={data.ownerDog.childImageSharp.fluid} alt="A dog paw" />
          </ImgContainer>
          <h4>Zuchtname "von der Laughy"</h4>
          <p>
            Laughy heisst auf Deutsch "lachend". Der Entlebucher-Sennenhund
            zieht seine Oberlippen so hoch, dass es so aussieht als ob er lacht.
          </p>
        </Card>
        <Card>
          <ImgContainer>
            <Img fluid={data.certified.childImageSharp.fluid} alt="A dog paw" />
          </ImgContainer>
          <h4>SKES</h4>
          <p>
            Wir sind Mitglieder des "Schweizerischen Klubs für Entlebucher
            Sennenhunde" (abk. SKES) und züchten rassenreine Welpe mit
            FCI-Abstammungsurkunde (Standard Nr. 47).
          </p>
        </Card>
      </CardHolder>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  h2 {
    letter-spacing: 1px;
    color: #d59d82;
    font-family: "Abhaya Libre", sans-serif;
    font-weight: 500;
    display: inline-block;
    font-size: 35px;
    span {
      font-style: italic;
    }
  }
`

const Description = styled.div`
  color: black;
  max-width: 700px;
  font-family: "Dosis", "Open Sans";
`

const CardHolder = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  max-width: 350px;
  margin: 10px;
  h4 {
    font-family: "Abhaya Libre", sans-serif;
    color: #d59d82;
    letter-spacing: 1px;
  }
  p {
    font-family: "Dosis", sans-serif;
    text-align: center;
  }
`
const ImgContainer = styled.div`
  width: 50px;
  margin-bottom: 15px;
`

export default UberUnsHome
