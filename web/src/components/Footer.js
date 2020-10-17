import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Instagram } from "@icons-pack/react-simple-icons"

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
        <Link to={"/"} className={"logo"}>
          <LogoImg>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="A laughing cartoon of an Entlebucher"
            />
          </LogoImg>
        </Link>
        <TextAndSocial>
          <p>
            Entlebucher-<span>Sennenhunde </span>
            von der Laughy
          </p>
          <a
            className={"instagram-link"}
            href={"https://instagram.com/entlebucher_von_der_laughy"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <InstagramIcon />
          </a>
        </TextAndSocial>
      </LeftSection>
      <RightSection>
        <Link to={"/steckbrief"}>Unsere Hündin</Link>
        <Link to={"/welpen"}>Welpenzucht</Link>
        <Link to={"/navita"}>naVita Produkte</Link>
        <Link to={"/kontakt"}>Kontakt</Link>
      </RightSection>
      <Credit>
        <a href={"https://johnsondesigns.tech/"}>
          <p>© 2020 by Johnson Designs</p>
        </a>
      </Credit>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 20px 20px 15px 20px;
  background-color: #fdf6f1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const LogoImg = styled.div`
  width: 100px;
  @media (max-width: 700px) {
    display: none;
  }
`
const TextAndSocial = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  align-items: flex-start;
  p {
    font-family: "Abhaya Libre";
    margin: 0;
    max-width: 205px;
    span {
      font-style: italic;
    }
  }
  a.instagram-link {
    margin-top: 15px;
  }
  @media (max-width: 340px) {
    text-align: center;
    align-items: center;
    margin-top: 0px;
  }
`

const Credit = styled.div`
  margin-top: 15px;
  a {
    color: black;
    text-decoration: none;
    font-size: 14px;
    font-family: "Dosis", sans-serif;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #d59d82;
    }
  }
`

const LeftSection = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    align-items: flex-start;
    a.logo {
      display: inline-block;
    }
  }
`
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
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

const InstagramIcon = styled(Instagram)`
  color: #e4405f;
  width: 30px;
  height: 30px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`

export default Footer
