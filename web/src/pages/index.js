import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main>
      <Phil>
        <Image />
      </Phil>
      <Headline>
        <h1>Philip Johnson</h1>
        <h3>Software Engineer</h3>
        <Link to="/about">
        <button>
          <p>Learn More</p>
          <ArrowIcon />
        </button>
        </Link>
      </Headline>
    </Main>
  </Layout>
)

const Main = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
min-height: 100%;
margin: 10rem;
@media (max-width: 970px) {
  flex-direction: column;
  margin: 0;
  margin-top: 5rem;
  }
`

const Phil = styled.div`
max-width: 500px;
min-width: 300px;
@media (max-width: 600px) {
 min-width:270px;
  }
`

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 h1 {
  font-family: "Glacial Regular", sans-serif;
  font-size: 51px;
  text-align: center;
  @media (max-width: 600px) {
  margin-top: 20px;
  font-size: 35px;
  }
 }
 h3{
   font-family: "Open Sans Regular", sans-serif;
   text-align: center;
   font-size: 26.5px;
   @media (max-width: 600px) {
  /* margin-top: 20px; */
  font-size: 15px;
  }
 }
 a {
   text-decoration: none;
 }
 button {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Open Sans Bold", sans-serif;
  font-size: 14px;
   width: 140px;
   height: 50px;
   background: white;
   border: none;
   margin-top: 20px;
   transition: color .5s ease, background .5s ease;
   p {
     margin: 0;
     padding: 0;
   }
   &:hover {
     cursor: pointer;
     color: white;
     background: black;
     border: 1px solid white;
     svg {
      color: white;
     }
   }
 }
 @media (max-width: 600px) {
  /* margin-top: 20px; */
  width: 100%;
  }
`
const ArrowIcon = styled(PlayArrowIcon)`
color: black;
font-size: 40px;
`

export default IndexPage
