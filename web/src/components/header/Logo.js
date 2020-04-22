import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

const Logo = props => {
  const data = useStaticQuery(graphql`
    query GetLogo {
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
      <AniLink
        cover
        duration={0.7}
        bg="#2d2d2d"
        direction="down"
        to="/"
        onClick={() => props.setOpen(false)}

      >
        <LogoImg>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="A laughing cartoon of an Entlebucher"
            backgroundColor={"white"}
          />
        </LogoImg>
        Home
      </AniLink>
    </Container>
  )
}
const Container = styled.div`
max-width: 200px;
a {
 display: flex;
 align-items: center;
 text-decoration: none;
 color: black;
}
`

const LogoImg = styled.div`
  z-index: 100;
  width: 100px;
`

export default Logo
