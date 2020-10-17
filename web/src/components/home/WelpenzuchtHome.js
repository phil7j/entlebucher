import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const WelpenZuchtHome = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "welpen.jpeg" }) {
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
      <Content>
        <h2>
          Welpen<span>zucht</span>
        </h2>
        <Subtitle>Wir hatten unseren ersten Wurf im August 2020!</Subtitle>
        <p>
          Die Welpenvermittlungsstelle des Schweizerischen Klubs für Entlebucher
          Sennenhunde gibt Ihnen gerne Auskunft über die zu vermittelnden Welpen
          in der Schweiz.
        </p>
        <a
          href={"https://www.entlebuchersennenhunde.ch/welpenvermittlung"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <Button>Welpenvermittlung SKES</Button>
        </a>
      </Content>
      <ImgContainer>
        <Img fluid={data.file.childImageSharp.fluid} alt="Pepper as a baby" />
      </ImgContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #ffffff;
  padding: 30px 20px;
  //align-items: flex-start;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  max-width: 300px;
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
  p {
    font-family: "Dosis";
    max-width: 300px;
    font-size: 18px;
    margin-top: 35px;
  }
  a {
    text-decoration: none;
    margin-bottom: 20px;
  }
`

const Subtitle = styled.div`
  color: #d59d82;
  font-family: "Dosis", sans-serif;
  letter-spacing: 1px;
  font-size: 25px;
  line-height: 30px;
`
const ImgContainer = styled.div`
  width: 55%;
  max-width: 500px;
  min-width: 270px;
  margin-bottom: 15px;
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Dosis", sans-serif;
  background-color: #d59d82;
  width: 190px;
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
export default WelpenZuchtHome
