import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

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
      <FirstRow>
        <ImgContainer>
          <Img fluid={data.navita.childImageSharp.fluid} alt="Navita Logo" />
        </ImgContainer>
        <Content>
          <FirstDescription>
            <p>
              naVita bietet uns die beste & natürlichste Tiernahrung für unsere
              Hündin und ihre Welpen:
            </p>
            <div className={"check"}>
              <Check>
                {" "}
                <Img
                  fluid={data.check.childImageSharp.fluid}
                  alt="Navita Logo"
                />
              </Check>
              durchschnittlich 70% Fleisch- & Fischanteil
            </div>
            <div className={"check"}>
              <Check>
                {" "}
                <Img
                  fluid={data.check.childImageSharp.fluid}
                  alt="Navita Logo"
                />
              </Check>
              von Ernährungsfachleuten entwickelt
            </div>
            <div className={"check"}>
              <Check>
                {" "}
                <Img
                  fluid={data.check.childImageSharp.fluid}
                  alt="Navita Logo"
                />
              </Check>
              frei von jeglichen Zusatzstoffen
            </div>
          </FirstDescription>
        </Content>
      </FirstRow>
      <SecondRow>
        <ImgContainer>
          <Img
            fluid={data.catDog.childImageSharp.fluid}
            alt="Picture of Cat and Dog"
          />
        </ImgContainer>
        <Content>
          <SecondDescription>
            <Subtitle>
              registrieren & <span>bestellen</span>
            </Subtitle>
            <p>Hier geht es zur Registrierung & Bestellung:</p>
            <a
              href="https://tiernahrung.navita.ch/de/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Button>naVita Website</Button>
            </a>
          </SecondDescription>
        </Content>
      </SecondRow>
      <BottomContainer>
        <BottomImage>
          <Img
            fluid={data.animals.childImageSharp.fluid}
            alt="Picture of Animals"
          />
        </BottomImage>
        <ThirdDescription>
          <h3>
            Suchen Sie die <span>optimalste</span> Tiernahrung für Ihren{" "}
            <span>Liebling?</span>
          </h3>
          <p>
            Gerne stehe ich, Brigitta Weiss, Ihnen als Tiernahrungsberaterin von
            naVita zur Verfügung.
          </p>
          <a
            href={"https://tiernahrung.navita.ch/de/contactvendor"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <Button>Kontakt</Button>
          </a>
        </ThirdDescription>
      </BottomContainer>
    </>
  )
}

const FirstRow = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px 15px;
`
const SecondRow = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px 15px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 15px;
  h2 {
    font-size: 35px;
    letter-spacing: 1px;
    font-family: "Abhaya Libre", sans-serif;
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
const FirstDescription = styled.div`
  min-width: 270px;
  div.check {
    font-family: "Dosis";
    max-width: 400px;
    font-size: 18px;
    display: flex;
    align-items: center;
    margin: 10px 0 10px 40%;
  }
  p {
    margin-bottom: 25px;
  }
  @media (max-width: 1105px) {
    div.check {
      margin: 10px auto;
    }
  }
`
const SecondDescription = styled.div`
  min-width: 270px;
  p {
    font-family: "Dosis";
    max-width: 400px;
    font-size: 18px;
    margin: 0 0 20px 0;
  }
  @media (max-width: 700px) {
    a {
      display: flex;
      justify-content: center;
    }
    p {
      text-align: center;
    }
  }
`
const ThirdDescription = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  h3 {
    font-family: "Abhaya Libre", sans-serif;
    letter-spacing: 2px;
  }
  span {
    font-style: italic;
  }
  p {
    font-family: "Dosis", sans-serif;
    letter-spacing: 1px;
  }
  a {
    text-decoration: none;
  }
`

const Subtitle = styled.div`
  font-family: "Abhaya Libre", sans-serif;
  letter-spacing: 1px;
  font-size: 35px;
  margin-bottom: 40px;
  line-height: 35px;
  span {
    font-style: italic;
  }
  @media (max-width: 700px) {
    text-align: center;
  }
`
const ImgContainer = styled.div`
  width: 25%;
  max-width: 500px;
  margin-bottom: 15px;
  min-width: 270px;
`
const Check = styled.div`
  width: 32px;
  margin-right: 10px;
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Dosis", sans-serif;
  background-color: #a0ac0f;
  letter-spacing: 1px;
  width: 150px;
  padding: 10px 0;
  transition: all 0.5s ease-in-out;
  box-shadow: 5px 5px 20px 0px rgba(50, 50, 50, 0.5);
  cursor: pointer;
  color: black;
  &:hover {
    color: white;
    background-color: black;
  }
`

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  margin: 0 auto;
  padding: 25px;
`
const BottomImage = styled.div`
  width: 80%;
  max-width: 900px;
  min-width: 150px;
  margin: 30px 20px 30px 20px;
`

export default Navita
