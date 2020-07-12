import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Steckbrief = () => {
  const data = useStaticQuery(graphql`
    query {
      rude: file(relativePath: { eq: "pepper-belo.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      mountain: file(relativePath: { eq: "pepper-berg.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      eating: file(relativePath: { eq: "pepper-eating.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      sideShot: file(relativePath: { eq: "pepper-side.JPG" }) {
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
      <SEO title="Steckbrief" />
      <TopHalf>
        <Container>
          <LeftColumn>
            <div>
              <h1>
                Unsere <span>Hündin</span>
              </h1>
              <h4>Hallo, ich bin Pepper!</h4>
            </div>
            <ImageContainer>
              <Img fluid={data.sideShot.childImageSharp.fluid} />
            </ImageContainer>
          </LeftColumn>
          <RightColumn>
            <div>
              <p>
                Ich bin meinem Herrchen und Frauchen gegenüber sehr anhänglich
                und folgsam. Im Haus verhalte ich mich ruhig und belle nur kurz
                wenn die Hausglocke läutet. Ich liebe es neue Tricks zu lernen
                und mich im Garten beim Spiel auszutoben. Anderen Menschen
                gegenüber bin ich eher zurückhalten, freue mich aber riesig über
                ein bekanntes Gesicht.
              </p>
              <p>
                Der Zuchtverband hat mir über mein Aussehen und Verhalten
                Bestnoten gegeben. Ausgedehnte Spaziergänge und anspruchsvolle
                Wanderungen gehören zu meinen Lieblingsbeschäftigungen.{" "}
              </p>
            </div>

            <ImageContainer>
              <Img fluid={data.eating.childImageSharp.fluid} />
            </ImageContainer>
          </RightColumn>
        </Container>
      </TopHalf>
      <BottomHalf>
        <Container>
          <LeftColumn>
            <div>
              <h1>
                Der <span>Entlebucher-</span> Sennenhund
              </h1>
              <h4>Steckbrief</h4>
            </div>
            <ImageContainer>
              <Img fluid={data.rude.childImageSharp.fluid} />
            </ImageContainer>
          </LeftColumn>
          <RightColumn>
            <div>
              <p>
                Der Entlebucher-Sennenhund ist der kleinste der
                Schweizer-Sennenhunde. Der Rüde mit einer Grösse von ca. 44-50
                cm und die Hündin mit 42-48 cm. Entlebucher stammen aus dem
                Kanton Luzern und Bern, Schweiz.
              </p>
              <p>
                Am liebsten ist es ihm, wenn er in der Nähe seines Herrchen
                leben kann. Er lernt gerne und schnell. Er liebt es beschäftigt
                zu sein mit Spielen, Kunststücken, Hindernissparqure,
                Suchspiele, usw. Auch wandern geht er sehr gerne.
              </p>
              <p>
                Auf der Website des Schweizerischen Klubs für
                Entlebucher-Sennenhunde erfahren Sie mehr über die Rasse:
              </p>
              <RasseButton>
                <a
                  href={"https://www.entlebuchersennenhunde.ch/die-rasse/index"}
                  target={"_blank"}
                >
                  mehr über die Rasse
                </a>
              </RasseButton>
            </div>

            <ImageContainer>
              <Img fluid={data.mountain.childImageSharp.fluid} />
            </ImageContainer>
          </RightColumn>
        </Container>
      </BottomHalf>
    </>
  )
}
const TopHalf = styled.div`
  padding: 50px 0;
`
const BottomHalf = styled.div`
  padding: 50px 0;
  background: #fdede2;
`
const Container = styled.article`
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  min-width: 400px;
  h1 {
    font-family: "Abhaya Libre", sans-serif;
    letter-spacing: 1px;
    max-width: 345px;
    span {
      font-style: italic;
    }
  }
  h4 {
    font-family: "Dosis", sans-serif;
    color: #d59d82;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 28px;
  }
`

const RightColumn = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 45%;
  min-width: 400px;
  p {
    font-family: "Dosis", sans-serif;
    max-width: 600px;
    margin-right: 30px;
    margin-bottom: 0;
    line-height: 30px;
  }
  p:nth-child(2) {
    margin-top: 15px;
  }
  p:last-child {
    margin-top: 15px;
  }
`
const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 50px 0;
`
const RasseButton = styled.button`
  margin: 30px auto;
  font-family: "Dosis", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 18px;
  padding: 10px 35px;
  transition: all 0.3s ease-in-out;
  background-color: #d59d82;
  outline: none;
  border: none;
  cursor: pointer;
  a {
    text-decoration: none;
    color: black;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    background-color: black;
    a {
      color: white;
    }
  }
`
export default Steckbrief
