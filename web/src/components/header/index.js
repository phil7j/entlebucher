import React, { useState } from "react"
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import Logo from "./Logo"
import Dropdown from "./Dropdown"
import NormalLink from "./NormalLink"
import ContactLink from "./ContactLink"

const Header = () => {
  let [open, setOpen] = useState(false)

  let links = [
    {
      text: "Unsere Hündin",
      to: "/unserehundin",
      type: "dropdown",
      nestedLinks: [
        { text: "Steckbrief", to: "/steckbrief" },
        { text: "Pepper's Zuhause", to: "/pepperszuhause" },
      ],
    },
    {
      text: "Welpenzucht",
      link: "/projects",
      type: "dropdown",
      nestedLinks: [
        { text: "Zuchtstätte", to: "/zuchtstaette" },
        { text: "Welpen", to: "/welpen" },
      ],
    },
    { text: "naVita Produkte", to: "/navita", type: "normal" },
    { text: "Kontakt", to: "/kontakt", type: "contact" },
  ]

  return (
    <>
      <Container>
        {console.log(open)}
        <Logo setOpen={setOpen} />
        <Hamburger open={open} onClick={() => setOpen(!open)} />
        <Nav open={open}>
          {links.map(link =>
            link.type === "dropdown" ? (
              <Dropdown
                to={link.to}
                text={link.text}
                nestedLinks={link.nestedLinks}
                setOpen={setOpen}
              />
            ) : link.type === "normal" ? (
              <NormalLink to={link.to} text={link.text} setOpen={setOpen} />
            ) : (
              <ContactLink to={link.to} text={link.text} setOpen={setOpen} />
            )
          )}
        </Nav>
      </Container>
    </>
  )
}

const Hamburger = styled(MenuIcon)`
  display: none;
  font-size: 50px;
  padding: 0px 15px;
  height: 100%;
  box-sizing: content-box;
  z-index: 101;
  color: #d59d82;
  &:hover {
    color: black;
  }
  @media (max-width: 1024px) {
    display: block;
    font-size: 50px;
  }
  @media (max-width: 600px) {
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  z-index: 102;
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
  max-width: 960px;
  opacity: 1;
  transition: background 0.5s linear, color 0.5s linear;
  @media (max-width: 1024px) {
    transition: right 0.3s linear;
    position: absolute;
    top: 0;

    right: ${props => (props.open ? "0" : "-1300px")};
    height: 100%;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    z-index: 99;
  }
`

export default Header
