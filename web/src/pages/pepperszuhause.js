import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const PeppersZuhause = () => {
  const data = useStaticQuery(graphql`
    query {
      family: file(relativePath: { eq: "familyshot.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      mom: file(relativePath: { eq: "pepperandmom.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      hiking: file(relativePath: { eq: "hiking.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      mountaindog: file(relativePath: { eq: "mountaindog.jpeg" }) {
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
      <SEO title="Pepper's Zuhause" />
      <TopHalf>
        <Container>
          <LeftColumn>
            <div>
              <h1>
                Pepper's <span>Zuhause</span>
              </h1>
              <h4>Willkommen im Zürcher Oberland!</h4>
            </div>
            <ImageContainer>
              <Img fluid={data.family.childImageSharp.fluid} />
            </ImageContainer>
          </LeftColumn>
          <RightColumn>
            <div>
              <p>
                Wir wohnen im schönen Zürcher Oberland am Dorfrand in Rüti in
                einem ruhigen Quartier. Pepper begleitet uns (fast) überall hin.
                Sie ist sich an Kühe, Pferde, Schafe, Hühner, Katzen usw.
                gewöhnt, da wir auf unseren Spaziergängen ihnen täglich
                begegnen.
              </p>
              <p>
                Wir sind Mitglieder des Schweizerischen Klubs für
                Entlebucher-Sennenhunde und züchten rassenreine Welpen mit
                FCI-Abstammungsurkunde
              </p>
            </div>

            <ImageContainer>
              <Img fluid={data.mom.childImageSharp.fluid} />
            </ImageContainer>
          </RightColumn>
        </Container>
        <AdditionalPics>
          <div className={"column"}>
            <h6>Meine Herrchen Brigitta & Lukas Weiss</h6>
            <ImageContainer>
              <Img fluid={data.hiking.childImageSharp.fluid} />
            </ImageContainer>
          </div>
          <div className={"column"}>
            <ImageContainer>
              <Img fluid={data.mountaindog.childImageSharp.fluid} />
            </ImageContainer>
          </div>
        </AdditionalPics>
      </TopHalf>
    </>
  )
}
const TopHalf = styled.div`
  padding: 50px 0;
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
    margin-bottom: 50px;
  }
`
const ImageContainer = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 5px 0;
  padding: 0 5px;
  img {
    min-height: 339px;
    max-height: 339px;
  }
`

const AdditionalPics = styled.div`
  h6 {
    font-family: "Dosis", sans-serif;
    font-size: 18px;
    font-weight: 400;
    margin: 15px;
  }
  div.column {
    width: 45%;
    min-width: 400px;
  }
  div.column:nth-child(2) {
    align-self: flex-end;
  }

  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export default PeppersZuhause
