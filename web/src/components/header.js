import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';


const Header = () => (
  <>
  <Container>
    <Inner>
      <NavItem>
        <Link
          to="/"
        >
          Home
        </Link>
      </NavItem>
      <NavItem>
        <Link
          to="/about"
        >
          About
        </Link>
      </NavItem>
      <NavItem>
        <Link
          to="/projects"
        >
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link
          to="/contact"
        >
          Contact
        </Link>
      </NavItem>
    </Inner>
  </Container>
  </>
)

const Container = styled.div`
      /* display: flex; */
      margin-bottom: 1.45rem;
      height: 70px;
`

const Inner = styled.div`
      display: flex;
      justify-content: flex-end;
      margin: 0 auto;
      max-width: 960;
      height: 100%;


`
const NavItem = styled.div`
      height: 100%;
      display: flex;
      align-items: center;
      transition: all 0.5s ease;
      a {
        font-family: "Glacial Regular", sans-serif;
        font-size: 25px;
        text-decoration: none;
        color: white;
        padding: 20px 20px;
        transition: all 0.8s ease;
        &:hover {
          color: black;
        }
        @media (max-width: 600px) {
        display: none;
  }
        }
      &:hover {
        background: white;
      }
`



export default Header
