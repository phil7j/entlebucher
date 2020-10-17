import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Termin from "../components/home/Termin"

const Welpen = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "welpen.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Welpen" />
      <Background>
        <Container>
          <ImgContainer>
            <Img fluid={data.file.childImageSharp.fluid} alt="A dog paw" />
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
const Background = styled.div`
  width: 100%;
  background: #fdf6f1;
`
const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
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
  margin: 20px 0;
  p {
    font-family: "Dosis";
    max-width: 400px;
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
  &:hover {
    color: white;
    background-color: black;
    border: 1px solid white;
  }
`

export default Welpen
