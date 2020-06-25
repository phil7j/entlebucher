import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const WelpenZucht = () => {
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
        <Subtitle>Zurzeit haben wir keine Welpen</Subtitle>
        <p>
          Die Welpenvermittlungsstelle des Schweizerischen Klubs für Entlebucher
          Sennenhunde gibt Ihnen gerne Auskunft über die zu vermittelnden Welpen
          in der Schweiz.
        </p>
        <Button>Welpenvermittlung SKES</Button>
      </Content>
      <ImgContainer>
        <Img fluid={data.file.childImageSharp.fluid} alt="Pepper as a baby" />
      </ImgContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #ffffff;
  padding: 30px 20px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 20px;
  h2 {
    font-size: 35px;
    letter-spacing: 1px;
    font-family: "Abhaya Libre";
    font-weight: 500;
    text-align: center;
    span {
      letter-spacing: 1px;
      font-style: italic;
    }
  }
  p {
    font-family: "Dosis";
    max-width: 300px;
    font-size: 15px;
    margin-top: 35px;
    text-align: center;
  }
`

const Subtitle = styled.div`
  color: #d59d82;
  font-family: "Dosis", sans-serif;
  letter-spacing: 1px;
  font-size: 25px;
  text-align: center;
`
const ImgContainer = styled.div`
  width: 55%;
  max-width: 500px;
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
  margin: 0 auto;
  box-shadow: 10px 10px 20px 0px rgba(50, 50, 50, 0.5);
  &:hover {
    color: white;
    background-color: black;
    border: 1px solid white;
  }
`
export default WelpenZucht
