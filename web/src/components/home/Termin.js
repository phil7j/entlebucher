import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Termin = () => {
  const data = useStaticQuery(graphql`
    query Termin {
      termin1: file(relativePath: { eq: "termin1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      termin2: file(relativePath: { eq: "termin2.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      termin3: file(relativePath: { eq: "termin3.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      termin4: file(relativePath: { eq: "termin4.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
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
          Möchten Sie den <span>Entlebucher</span> Sennenhund näher{" "}
          <span>kennenlernen?</span>
        </h2>

        <p>Sie können uns gerne in unserer Zuchtstätte besuchen!</p>
        <Button>Termin vereinbaren</Button>
      </Content>
      <BottomContent>
        <ImgContainer>
          <Img
            fluid={data.termin1.childImageSharp.fluid}
            alt="Pepper as a baby"
          />
        </ImgContainer>
        <ImgContainer>
          <Img
            fluid={data.termin2.childImageSharp.fluid}
            alt="Pepper as a baby"
          />
        </ImgContainer>
        <ImgContainer>
          <Img
            fluid={data.termin3.childImageSharp.fluid}
            alt="Pepper as a baby"
          />
        </ImgContainer>
        <ImgContainer>
          <Img
            fluid={data.termin4.childImageSharp.fluid}
            alt="Pepper as a baby"
          />
        </ImgContainer>
      </BottomContent>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #d59d82;
  padding: 30px 20px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  h2 {
    font-size: 27px;
    letter-spacing: 1px;
    font-family: "Abhaya Libre";
    font-weight: 500;
    text-align: center;
    max-width: 700px;
    margin-bottom: 0;
    span {
      letter-spacing: 1px;
      font-style: italic;
    }
  }
  p {
    font-family: "Dosis";
    max-width: 500px;
    font-size: 20px;
    margin: 35px 0;
    text-align: center;
  }
`

const ImgContainer = styled.div`
  width: 250px;
  height: 220px;
  max-width: 350px;
  overflow: hidden;
  padding-top: 15px;
  @media (max-width: 540px) {
    width: 150px;
    height: 150px;
  }
`
const BottomContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Dosis", sans-serif;
  background-color: white;
  color: black;
  width: 180px;
  padding: 10px 0;
  border: 1px solid #d59d82;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  margin: 25px auto;
  box-shadow: 10px 10px 20px 0px rgba(50, 50, 50, 0.5);
  &:hover {
    color: white;
    background-color: black;
    border: 1px solid white;
  }
`
export default Termin