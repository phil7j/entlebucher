import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Termin from "../components/home/Termin"
import ThreePicRow from "../components/ThreePicRow"

const Welpen = () => {
  const data = useStaticQuery(graphql`
    query {
      welpen: file(relativePath: { eq: "welpen.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      aslan: allFile(filter: { relativeDirectory: { eq: "aslan" } }) {
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
      <SEO title="Welpen" />
      <UnsereWelpen>
        <Container>
          <Title>
            <h1>Unsere Welpen</h1>
            <h4>Der A-Wurf von der Laughy</h4>
          </Title>
          <Description>
            <p>
              Pepper ist stolze Mutter ihres ersten Wurfes! Am 12. & 13. August
              2020 haben diese 3 süsse & gesunde Welpen das Licht der Welt
              erblickt.{" "}
            </p>
          </Description>
        </Container>
        <ThreePicRow
          title={"Aslan"}
          description={"Geb. 12.08.2020, Gewicht: 420g"}
          data={data.aslan.edges}
        />
      </UnsereWelpen>
      <Background>
        <Container>
          <ImgContainer>
            <Img fluid={data.welpen.childImageSharp.fluid} alt="A dog paw" />
          </ImgContainer>
          <Content>
            <h2>
              Suchen Sie einen Entlebucher <span>Welpen?</span>
            </h2>
            <Description>
              <p>
                Wir erwarten unseren ersten Wurf Mitte August 2020. Bitte wenden
                Sie sich vertrauensvoll an die Welpenvermittlungsstelle des
                Schweizerischen Klubs für Entlebucher Sennenhunde SKES. Es sind
                laufend reinrassige Welpen aus guten SKES-Zuchtstätten zu
                vermitteln.
              </p>{" "}
            </Description>
            <a
              href="https://www.entlebuchersennenhunde.ch/welpenvermittlung"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Button>SKES</Button>
            </a>
          </Content>
        </Container>
      </Background>
      <Termin />
    </>
  )
}
const UnsereWelpen = styled.section`
  padding: 10px;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  flex-grow: 1;
  align-items: flex-start;
  margin-right: 10px;
  h1 {
    font-size: 40.5px;
    letter-spacing: 1px;
    font-family: "Abhaya Libre";
    font-weight: bold;
    text-align: left;
    margin-bottom: 0px;
  }
  h4 {
    font-family: "Dosis", sans-serif;
    color: #d59d82;
    font-weight: 400;
    letter-spacing: 0px;
    font-size: 26px;
  }
`

const Background = styled.div`
  width: 100%;
  background: #fdf6f1;
`
const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px 20px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 10px;
  h2 {
    font-size: 35px;
    letter-spacing: 1px;
    font-family: "Abhaya Libre";
    font-weight: 500;
    span {
      letter-spacing: 1px;
      font-style: italic;
    }
  }

  a {
    text-decoration: none;
  }
`
const Description = styled.div`
  display: flex;
  p {
    font-family: "Dosis";
    max-width: 450px;
    font-size: 18px;
    margin: 0;
  }
`

const ImgContainer = styled.div`
  width: 55%;
  max-width: 500px;
  margin-bottom: 15px;
  min-width: 270px;
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Dosis", sans-serif;
  background-color: #d59d82;
  width: 150px;
  padding: 10px 0;
  border: 1px solid #d59d82;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  box-shadow: 5px 5px 20px 0px rgba(50, 50, 50, 0.5);
  color: black;
  margin: 20px 0 0 0;
  &:hover {
    color: white;
    background-color: black;
    border: 1px solid white;
  }
`

export default Welpen
