import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Footer from "./Footer"
import GlobalStyle from "../components/GlobalStyle"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />

      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Main = styled.main`
  /* height: 100%; */
`
const Container = styled.main`
  //display: grid;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header"
    "main-content"
    "footer";
  overflow: hidden;
`

export default Layout
