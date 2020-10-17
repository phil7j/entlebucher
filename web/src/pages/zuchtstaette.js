import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Zuchtstaette = () => {
  const data = useStaticQuery(graphql`
    query {
      zuchtstaette3: file(relativePath: { eq: "zuchtstaette3.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      zuchtstaette1: file(relativePath: { eq: "zuchtstaette1.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      zuchtstaette2: file(relativePath: { eq: "zuchtstaette2.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      zuchtstaette4: file(relativePath: { eq: "zuchtstaette4.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      bello: file(relativePath: { eq: "cesar-bello.jpeg" }) {
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
      <SEO title="Zuchtstätte" />
      <TopHalf>
        <Container>
          <LeftColumn>
            <div>
              <h1>
                Unsere <span>Zuchtstätte</span>
              </h1>
              <h4>... von der Laughy (FCI)</h4>
            </div>
            <ImageContainer>
              <Img fluid={data.zuchtstaette3.childImageSharp.fluid} />
            </ImageContainer>
          </LeftColumn>
          <RightColumn>
            <TopDescription>
              <p>
                Wir züchten nach den Vorgaben der Schweizerischen Kynologischen
                Gesellschaft (SKG) und den Zuchtbestimmungen des Schweizerischen
                Klubs für Entlebucher Sennenhunde (SKES). Unsere Zuchtstätte
                wurde vom Zuchtwart des SKES kontrolliert und als gut befunden.
                Der Zuchtname «…von der Laughy» ist bei der SKG eingetragen und
                über den FCI international geschützt.
              </p>

              <Link to={"/welpen"}>
                <Button>Unsere Welpen</Button>
              </Link>
            </TopDescription>
            <ImageContainer>
              <Img fluid={data.zuchtstaette4.childImageSharp.fluid} />
            </ImageContainer>
          </RightColumn>
        </Container>
        <Container>
          <LeftColumn>
            <div>
              <h4>Wie wir züchten</h4>
            </div>
            {/*<ImageContainer>*/}
            {/*  <Img fluid={data.zuchtstaette1.childImageSharp.fluid} />*/}
            {/*</ImageContainer>*/}
          </LeftColumn>
          <RightColumn>
            <TopDescription>
              <p>
                Unsere Welpen werden in einer speziellen Wurfkiste im Wohnzimmer
                geboren und wachsen im Haus und im Garten auf. Um den Kleinen
                einen optimalen Start ins Leben zu ermöglichen, füttern wir sie
                von Anfang an mit hochwertiger Tiernahrung auf natürlicher Basis
                von naVita. Wir gewöhnen Sie an andere Menschen,
                Alltagsgeräusche, verschiedene Untergründe, die Leine und das
                Autofahren. Sie entdecken spielerisch ihre Umgebung und
                geniessen unsere liebevolle Pflege und Aufmerksamkeit, bis sie
                mit ca. 10 Wochen entwurmt, geimpft und gechippt zu ihrer neuen
                Familie ziehen.
              </p>
            </TopDescription>
            {/*<ImageContainer>*/}
            {/*  <Img fluid={data.zuchtstaette2.childImageSharp.fluid} />*/}
            {/*</ImageContainer>*/}
          </RightColumn>
        </Container>
        {/*<AdditionalPics>*/}
        {/*  <div className={"column"}>*/}
        {/*    <h6>Pepper as Welpe</h6>*/}
        {/*    <ImageContainer>*/}
        {/*      <Img fluid={data.zuchtstaette3.childImageSharp.fluid} />*/}
        {/*    </ImageContainer>*/}
        {/*  </div>*/}
        {/*  <div className={"column"}>*/}
        {/*    <ImageContainer>*/}
        {/*      <Img fluid={data.zuchtstaette4.childImageSharp.fluid} />*/}
        {/*    </ImageContainer>*/}
        {/*  </div>*/}
        {/*</AdditionalPics>*/}
      </TopHalf>

      <BottomHalf>
        <BottomContainer>
          <BottomImgContainer>
            <Img fluid={data.bello.childImageSharp.fluid} alt="Der Rüde" />
          </BottomImgContainer>
          <Content>
            <h2>
              Der<span> Rüde</span>
            </h2>
            <Subtitle>Bello-Cesar vom Oberbaselbiet</Subtitle>
            <BottomDescription>
              <p>
                CESAR ist ein verspielter und familienfreundlicher Rüde, der am
                21.03.2018 in Oberbaselbiet (CH) geboren wurde bei der Familie
                Crimi.
              </p>{" "}
              <p>
                Er fühlt sich pudelwohl in den Wäldern und auf den Wiesen in und
                rund um Zürich. Bei langen und ausgedehnten Spaziergängen spielt
                er sehr gerne mit anderen Hunden. Die Zuchttauglichkeitsprüfung
                (Körung) hat CESAR im Oktober 2019 mit Bravour bestanden. Das
                Verhalten und das Wesen von ihm sind exzellent. 
              </p>{" "}
            </BottomDescription>
            <a
              href={"https://bello-cesar.ch/cesar/"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Button>mehr über Bello-Cesar</Button>
            </a>
          </Content>
        </BottomContainer>
      </BottomHalf>
    </>
  )
}
const TopHalf = styled.div`
  padding: 20px 0;
`

const Container = styled.article`
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 45%;
  min-width: 300px;
  padding: 0 10px;
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
  align-items: flex-start;
  min-width: 300px;
  padding: 0 10px;
`
const TopDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
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

const ImageContainer = styled.div`
  width: 100%;
  min-width: 270px;
  margin: 5px 0;
  padding: 0 5px;
`

// const AdditionalPics = styled.div`
//   h6 {
//     font-family: "Dosis", sans-serif;
//     font-size: 18px;
//     font-weight: 400;
//     margin: 15px;
//   }
//   div.column {
//     width: 45%;
//     min-width: 270px;
//   }
//   div.column:nth-child(2) {
//     align-self: flex-end;
//   }
//
//   margin: 0 auto;
//   max-width: 1400px;
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
// `
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
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 20px;
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
    max-width: 600px;
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
  width: 55%;
  min-width: 270px;
  max-width: 500px;
  margin-bottom: 15px;
`
export default Zuchtstaette
