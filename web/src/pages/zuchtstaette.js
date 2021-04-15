import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import ImageGrid from "../components/ImageGrid"

const Zuchtstaette = () => {
  const data = useStaticQuery(graphql`
    query {
      zuchtstaette3: file(relativePath: { eq: "zuchtstaette1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      zuchtstaette1: file(relativePath: { eq: "zuchtstaette2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      zuchtstaette2: file(relativePath: { eq: "zuchtstaette3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      zuchtstaette4: file(relativePath: { eq: "zuchtstaette4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      alfie: file(relativePath: { eq: "alfie1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  let dataForGrid
  if (data) {
    dataForGrid = Object.entries(data).filter(pic => pic[0] !== "alfie")
  }
  return (
    <>
      <SEO title="Zuchtstätte" />
      <TopHalf>
        <Container>
          <Header>
            <h1>
              Unsere <span>Zuchtstätte</span>
            </h1>
            <h4>... von der Laughy (FCI)</h4>
          </Header>
          <TopDescription>
            <p>
              Wir züchten nach den Vorgaben der Schweizerischen Kynologischen
              Gesellschaft (SKG) und den Zuchtbestimmungen des Schweizerischen
              Klubs für Entlebucher Sennenhunde (SKES). Unsere Zuchtstätte wurde
              vom Zuchtwart des SKES kontrolliert und als gut befunden. Der
              Zuchtname «…von der Laughy» ist bei der SKG eingetragen und über
              den FCI international geschützt.
            </p>

            <Link to={"/welpen"}>
              <Button>Unsere Welpen</Button>
            </Link>
          </TopDescription>
        </Container>

        <ImageGrid data={dataForGrid} />

        <Container>
          <div>
            <h4>Wie wir züchten</h4>
          </div>
          <TopDescription>
            <p>
              Unsere Welpen werden in einer speziellen Wurfkiste im Wohnzimmer
              geboren und wachsen im Haus und im Garten auf. Um den Kleinen
              einen optimalen Start ins Leben zu ermöglichen, füttern wir sie
              von Anfang an mit hochwertiger Tiernahrung auf natürlicher Basis
              von naVita. Wir gewöhnen Sie an andere Menschen, Alltagsgeräusche,
              verschiedene Untergründe, die Leine und das Autofahren. Sie
              entdecken spielerisch ihre Umgebung und geniessen unsere
              liebevolle Pflege und Aufmerksamkeit, bis sie mit ca. 10 Wochen
              entwurmt, geimpft und gechippt zu ihrer neuen Familie ziehen.
            </p>
          </TopDescription>
        </Container>
      </TopHalf>

      <BottomHalf>
        <BottomContainer>
          <BottomImgContainer>
            <Img fluid={data.alfie.childImageSharp.fluid} alt="Der Rüde" />
          </BottomImgContainer>
          <Content>
            <h2>
              Der<span> Rüde</span>
            </h2>
            <Subtitle>Alfie vom Kornried</Subtitle>
            <BottomDescription>
              <p>
                Spitzname: Malon <br />
                Geburtsname: Alfie vom Kornried
                <br />
                Rasse: Entlebucher Sennenhund
                <br />
                Geburtstag: 29,02,2016 <br />
                Gewicht: 25 kg <br />
                Tricks: Packet Papiernastücher apportieren <br />
                Kentnisse: Therapiehund <br />
                Vorlieben: Spielen mit Freunden <br />
                Abneigungen: Wasser
                <br />
              </p>{" "}
              <p>
                <br />
                Wie ich zu Frauchen/Herrchen kam: Ich wurde von Zeno, dem
                Jüngsten Sohn der Familie Tschümperlin ausgewählt.
              </p>{" "}
              <p>
                Lieblingsessen: Wurst und Käse <br />
                Lieblingsspielzeug: Frosch <br />
                <br />
                Lieblingsort: Ein Platz an der Sonne <br />
              </p>
            </BottomDescription>
            {/*<a*/}
            {/*  href={"https://bello-cesar.ch/cesar/"}*/}
            {/*  target={"_blank"}*/}
            {/*  rel={"noreferrer"}*/}
            {/*>*/}
            {/*  <Button>mehr über Bello-Cesar</Button>*/}
            {/*</a>*/}
          </Content>
        </BottomContainer>
      </BottomHalf>
    </>
  )
}
const TopHalf = styled.div`
  padding: 20px 20px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.article`
  margin: 20px auto;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
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

const TopDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-family: "Dosis", sans-serif;
    max-width: 550px;
    //margin-right: 30px;
    margin-bottom: 0px;
    line-height: 30px;
  }

  a {
    margin: 30px 0;
    display: block;
    text-decoration: none;
    color: black;
    transition: all 0.3s ease-in-out;
  }
`

const Button = styled.button`
  font-family: "Dosis", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 18px;
  padding: 10px 32px;
  transition: all 0.3s ease-in-out;
  background-color: #d59d82;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 20px 0px rgba(50, 50, 50, 0.5);

  &:hover {
    background-color: black;
    color: white;
  }
`
//Bottom Half
const BottomHalf = styled.div`
  background: #fdede2;
  padding: 30px 0px;
`

const BottomContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  //padding: 20px;
  max-width: 600px;
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
    outline: none;
    align-self: flex-start;
  }
`
const BottomDescription = styled.div`
  margin: 25px 0px;
  p {
    font-family: "Dosis";
    max-width: 400px;
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
  text-align: left;
`
const BottomImgContainer = styled.div`
  width: 50%;
  min-width: 350px;
  margin: 30px;
`
export default Zuchtstaette
