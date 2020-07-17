import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const UnsereHundinHome = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "unsere-hundin.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Background>
      <Container>
        <ImgContainer>
          <Img fluid={data.file.childImageSharp.fluid} alt="A dog paw" />
        </ImgContainer>
        <Content>
          <h2>
            Unsere<span> Hündin</span>
          </h2>
          <Subtitle>Pepper Halla von der Haslere</Subtitle>
          <Description>
            <p>Pepper Halla von der Haslere (FCI):</p>{" "}
            <p>Geboren am 13.03.2017 in Aeschi b. Spiez</p>{" "}
            <p>Mutter: Riana von der Auenrüti </p>
            <p>Vater: Giro vom Bogenthal</p>
            <p>Pepper hat am 05.10.2019 die Ankörung des SKES bestanden!</p>
          </Description>
          <Link to={"/steckbrief"}>
            <Button>Streckbrief</Button>
          </Link>
        </Content>
      </Container>
    </Background>
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
  align-items: flex-start;
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
    max-width: 300px;
    font-size: 18px;
    margin: 0;
    line-height: 28px;
  }
  p:last-child {
    margin-top: 15px;
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
  min-width: 250px;
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

export default UnsereHundinHome
