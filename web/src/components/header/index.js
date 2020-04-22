import React, { useState } from "react"
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from "./Logo"


const Header = () => {
  let [open, setOpen] = useState(false)

  return (
    <>
      <Container>
        <Logo setOpen={setOpen}/>

        <Hamburger open={open} onClick={() => setOpen(!open)} />
        <Nav open={open}>
          <NavItem>
            <AniLink
              cover
              duration={0.7}
              bg="#2d2d2d"
              direction="down"
              to="/about"
              onClick={() => setOpen(false)}
            >
              About
            </AniLink>
          </NavItem>
          <NavItem>
            <AniLink
              cover
              duration={0.7}
              bg="#2d2d2d"
              direction="down"
              to="/projects"
              onClick={() => setOpen(false)}
            >
              Projects
            </AniLink>
          </NavItem>
          <NavItem>
            <AniLink
              cover
              duration={0.7}
              bg="#2d2d2d"
              direction="down"
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </AniLink>
          </NavItem>
        </Nav>
      </Container>

    </>
  )
}



const Hamburger = styled(MenuIcon)`
  /* align-self: flex-end; */
  display: none;
  font-size: 50px;
  padding: 0px 15px;
  height: 100%;
  box-sizing: content-box;
  z-index: 101;
  color: grey;
  &:hover {
    color: white;
    background: black;
  }
  @media (max-width: 1024px) {
    display: block;
    font-size: 70px;
  }
  @media (max-width: 600px) {
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.45rem;
  height: 70px;
  z-index: 102;
  background: white;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  padding: 0 20px;
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`

const Nav = styled.div`
      display: flex;
      justify-content: flex-end;
      background: white;
      /* margin: 0 auto; */
      max-width: 960;
      height: 100%;
      opacity: 1;
      /* border: ${props =>
        props.open ? "4px solid green" : "4px solid red"}; */
      transition: background 0.5s linear, color 0.5s linear;
      @media (max-width: 1024px) {
        transition: right 0.3s linear;
        position: fixed;
        /* display: ${props => (props.open ? "flex" : "none")}; */
        right: ${props => (props.open ? "0" : "-1300px")};
        /* opacity: ${props => (props.open ? "1" : "0")}; */
        flex-direction: column;
        width: 100%;
        align-items: center;
        z-index: 99;
  }
`
const NavItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* transition: all 0.5s ease; */

  a {
    font-size: 25px;
    text-decoration: none;
    color: black;
    padding: 20px 20px;
    transition: background 0.8s ease, color 0.8s ease;
    /* &:hover {
          color: black;
        } */
    @media (max-width: 1024px) {
      /* width: 100%; */
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      /* padding: 10%; */
    }
  }
  &&:hover {
    background: black;
    a {
      color: white;
    }
  }
  @media (max-width: 1024px) {
    width: 100%;
    /* justify-content: center; */
  }
`

export default Header
