import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  return (
    <Container>
      <h3>Footer Here</h3>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

export default Footer
