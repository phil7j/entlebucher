import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import MyForm from "../components/MyForm"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Kontakt = () => {
  const data = useStaticQuery(graphql`
    query GetMap {
      file(relativePath: { eq: "map.png" }) {
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
      <SEO title="Kontakt" />
      <Container>
        <Header>
          <h1>Kontakt</h1>
          <p>
            Möchten Sie den Entlebucher-Sennenhund näher kennenlernen und mehr
            über die Rasse erfahren? Sie sind herzlich willkommen, uns in
            unserer Zuchtstätte zu besuchen. Hier können Sie mit uns einen
            Termin vereinbaren:{" "}
          </p>
        </Header>
        <MyForm />
        <KontaktInfo>
          <p>
            Entlebucher-Sennenhunde von der Laughy Brigitta & Lukas Weiss-Gujer
          </p>
          <p>Täusistrasse 45 8630 Rüti, ZH</p>
          <p>Handy Nr. +41 (0)76 488 38 37</p>
        </KontaktInfo>
        <MapImg>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="A map of where we are located"
          />
        </MapImg>
        <MapsButton>
          <a href={"https://goo.gl/maps/VRZKeGC3nF8cC1YGA"} target={"_blank"}>
            Wegbeschreibung
          </a>
        </MapsButton>
      </Container>
    </>
  )
}

const Container = styled.article`
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  h3 {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto;
    font-weight: 400;
    margin-top: 30px;
    padding: 10px;
  }
  @media (max-width: 834px) {
    align-items: center;
  }
`

const Header = styled.div`
  margin-top: 20px;
  padding: 0 15px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 834px) {
    justify-content: flex-start;
  }
  h1 {
    letter-spacing: 2px;
    font-family: "Abhaya Libre", sans-serif;
    text-align: left;
  }
  p {
    font-family: "Dosis", sans-serif;
    max-width: 600px;
    margin-right: 30px;
  }
`
const KontaktInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 15px;
  p {
    line-height: 37px;
  }
  p:nth-child(1) {
    max-width: 400px;
  }
  p:nth-child(2) {
    max-width: 150px;
  }
  @media (max-width: 834px) {
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    text-align: center;
  }
`

const MapImg = styled.div`
  margin-top: 40px;
  width: 80%;
`

const MapsButton = styled.button`
  margin: 30px auto;
  font-family: "Dosis", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 18px;
  padding: 10px 35px;
  transition: all 0.3s ease-in-out;
  background-color: #d59d82;
  box-shadow: 5px 5px 20px 0px rgba(50, 50, 50, 0.5);
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
export default Kontakt
