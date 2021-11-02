import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Termin from "../components/home/Termin"
import AWurf from "../components/welpen/AWurf"
import BWurf from "../components/welpen/BWurf"

const Welpen = () => {
  const data = useStaticQuery(graphql`
    query {
      welpe: file(relativePath: { eq: "welpen2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      aslan: allFile(
        filter: { relativeDirectory: { eq: "aslan" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
      archie: allFile(
        filter: { relativeDirectory: { eq: "archie" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
      amira: allFile(
        filter: { relativeDirectory: { eq: "amira" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Welpen" />
      <UnsereWelpen>
        <Container>
          <PageTitle>
            <h1>Unsere Welpen</h1>
          </PageTitle>
          <Title>
            <h4>Der C-Wurf von der Laughy</h4>
          </Title>
          <Description>
            <p>Wir erwarten unseren nächsten Wurf im Sommer 2022. </p>
          </Description>
        </Container>
        <BWurf />
        <AWurf />
        <Instagram>
          <h2>
            Fotos von unserem
            <span>Wurf</span>
          </h2>

          <p>
            Auf unserer Instagram Seite posten wir laufend Fotos von Pepper &
            unseren Welpen:{" "}
          </p>
          <a
            href={"https://instagram.com/entlebucher_von_der_laughy"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <Button instagram={true}>Instagram</Button>
          </a>
        </Instagram>
      </UnsereWelpen>
      <Background>
        <Container2>
          <ImgContainer>
            <Img
              className={"image"}
              fluid={data.welpe.childImageSharp.fluid}
              alt="A dog paw"
            />
          </ImgContainer>
          <Content>
            <h2>
              Suchen Sie einen Entlebucher <span>Welpen?</span>
            </h2>
            <Description>
              <p>
                Wir erwarten unseren nächsten Wurf im Frühling 2021. Bitte
                wenden Sie sich vertrauensvoll an die Welpenvermittlungsstelle
                des Schweizerischen Klubs für Entlebucher Sennenhunde SKES. Es
                sind laufend reinrassige Welpen aus guten SKES-Zuchtstätten zu
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
        </Container2>
      </Background>
      <Termin />
    </>
  )
}
const UnsereWelpen = styled.section`
  padding: 10px;
`
const Instagram = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px 90px 20px;

  color: #010101;
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
  a {
    text-decoration: none;
  }
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  flex-grow: 1;
  margin-top: 30px;
  h4 {
    font-family: "Dosis", sans-serif;
    color: #d59d82;
    font-weight: 400;
    font-size: 26px;
    margin-bottom: 50px;
  }
  @media (max-width: 500px) {
    align-items: center;
  }
`
const PageTitle = styled.div`
  h1 {
    font-size: 40.5px;
    letter-spacing: 1px;
    font-family: "Abhaya Libre";
    font-weight: bold;
    text-align: left;
  }
`

const Background = styled.div`
  width: 100%;
  background: #fdf6f1;
`
const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
    justify-content: center;
  }
`
const Container2 = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 20px;
  @media (max-width: 700px) {
    padding: 30px 0;
    justify-content: center;
  }
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
  @media (max-width: 1150px) {
    h2 {
      font-size: 30px;
    }
  }
  @media (max-width: 862px) {
    h2 {
      text-align: center;
    }
    a {
      display: flex;
      justify-content: center;
    }
  }
`
const Description = styled.div`
  display: flex;
  margin-bottom: 30px;
  p {
    font-family: "Dosis";
    max-width: 500px;
    font-size: 18px;
    margin: 0;
    text-align: center;
  }
  @media (max-width: 862px) {
    justify-content: center;
    margin-right: 0;
    text-align: center;
  }
`

const ImgContainer = styled.div`
  width: 450px;
  max-height: 400px;
  margin-bottom: 15px;
  min-width: 270px;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1150px) {
    width: 250px;
  }
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Dosis", sans-serif;
  background-color: ${props => (props.instagram ? "white" : "#d59d82")};
  width: 150px;
  padding: 10px 0;
  border: 1px solid #d59d82;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  box-shadow: ${props =>
    props.instagram ? 0 : "5px 5px 20px 0px rgba(50, 50, 50, 0.5)"};
  color: black;
  margin: 20px 0 0 0;
  &:hover {
    color: white;
    background-color: black;
    border: 1px solid white;
  }
  @media (max-width: 862px) {
  }
`

export default Welpen
