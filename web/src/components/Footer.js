import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query GetFooterLogo {
      file(relativePath: { eq: "entlebucher.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Container>
      <LeftSection>
        <Title>
          <Link to={"/"}>
            <LogoImg>
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="A laughing cartoon of an Entlebucher"
              />
            </LogoImg>
          </Link>
          <p>
            Entlebucher-<span>Sennenhunde </span>
            von der Laughy
          </p>
        </Title>
        <Credit>
          <a href={"https://johnsondesigns.tech/"}>
            <p>© 2020 by Johnson Designs</p>
          </a>
        </Credit>
      </LeftSection>
      <RightSection>
        <Link to={"/steckbrief"}>Unsere Hündin</Link>
        <Link to={"/welpen"}>Welpenzucht</Link>
        <Link to={"/navita"}>naVita Produkte</Link>
        <Link to={"/kontakt"}>Kontakt</Link>
      </RightSection>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 20px 10px 15px 10px;
  background-color: #fdf6f1;
  display: flex;
  justify-content: space-around;
`
const LogoImg = styled.div`
  width: 100px;
  @media (max-width: 1024px) {
    display: none;
  }
`
const Title = styled.div`
  display: flex;
  align-items: center;
  p {
    font-family: "Abhaya Libre";
    margin: 0;
    max-width: 205px;
    span {
      font-style: italic;
    }
  }
`

const Credit = styled.div`
  a {
    color: black;
    text-decoration: none;
    font-size: 14px;
    font-family: "Dosis";
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #d59d82;
      //font-size: 15px;
    }
  }
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 1024px) {
    align-items: flex-start;
    a {
      display: inline-block;
      margin-top: 20px;
    }
  }
`
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  a {
    font-family: "Dosis";
    color: black;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #d59d82;
    }
  }
`

export default Footer
