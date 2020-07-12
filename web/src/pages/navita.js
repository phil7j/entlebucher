import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Termin from "../components/home/Termin"

const Navita = () => {
  const data = useStaticQuery(graphql`
    query {
      navita: file(relativePath: { eq: "navita.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      catDog: file(relativePath: { eq: "cat-dog.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      check: file(relativePath: { eq: "check.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      animals: file(relativePath: { eq: "tons-of-animals.jpg" }) {
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
            <Img fluid={data.navita.childImageSharp.fluid} alt="Navita Logo" />
          </ImgContainer>
          <Content>
            <Description>
              <p>
                naVita bietet uns die beste & natürlichste Tiernahrung für
                unsere Hündin und den Welpen an:
              </p>{" "}
              <p>
                <ImgContainer></ImgContainer>
              </p>
            </Description>
            <a
              href="https://www.entlebuchersennenhunde.ch/welpenvermittlung"
              target={"_blank"}
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
  padding: 20px;
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
  margin: 25px 0;
  p {
    font-family: "Dosis";
    max-width: 400px;
    font-size: 18px;
    margin: 0;
  }
`

const Subtitle = styled.div`
  color: #d59d82;
  font-family: "Dosis", sans-serif;
  letter-spacing: 1px;
  font-size: 25px;
`
const ImgContainer = styled.div`
  width: 55%;
  max-width: 500px;
  margin-bottom: 15px;
  min-width: 350px;
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
  box-shadow: 10px 10px 20px 0px rgba(50, 50, 50, 0.5);
  color: black;
  &:hover {
    color: white;
    background-color: black;
    border: 1px solid white;
  }
`

export default Navita
