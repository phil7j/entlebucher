import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Kontakt = () => {
  const data = useStaticQuery(graphql`
    query UnsereHundin {
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
      <SEO title="Unsere Hündin" />
      <TopContainer>
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
            <p>Pepper Halla von der Haslere (FCI):</p>
            <p>Geboren am 13.03.2017 in Aeschi b. Spiez</p>
            <p> Mutter: Riana von der Auenrüti </p>
            <p>Vater: Giro vom Bogenthal</p>
            <p>Pepper hat am xx die Ankörung des SKES bestanden!</p>
          </div>

          <ImageContainer>
            <Img fluid={data.eating.childImageSharp.fluid} />
          </ImageContainer>
        </RightColumn>
      </TopContainer>
    </>
  )
}

const TopContainer = styled.article`
  margin: 50px auto;
  max-width: 1400px;
  display: flex;
  //flex-direction: column;
  justify-content: center;
  //align-items: center;
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
  p:last-child {
    margin-top: 10px;
  }
`
const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 50px 0;
`

export default Kontakt
