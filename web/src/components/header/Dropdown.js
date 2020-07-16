import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

const Dropdown = props => {
  return (
    <DropdownContainer>
      <DropdownBtn>
        {props.text}
        <Arrow fontSize="medium" />
      </DropdownBtn>
      <DropdownContent>
        {props.nestedLinks !== undefined
          ? props.nestedLinks.map(link => (
              <Link to={link.to} onClick={() => props.setOpen(false)}>
                {link.text}
              </Link>
            ))
          : null}
      </DropdownContent>
    </DropdownContainer>
  )
}

const DropdownContainer = styled.div`
  cursor: pointer;
  height: 100%;
  @media (max-width: 1024px) {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
  }
`

const Arrow = styled(ArrowDropDownIcon)`
  color: #d59d82;
  @media (max-width: 1024px) {
    display: none;
  }
`

const DropdownBtn = styled.div`
  color: black;
  padding: 0 15px;
  font-size: 16px;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    font-size: 26px;
    padding-bottom: 15px;
    border-bottom: 1px solid black;
  }
`

const DropdownContent = styled.div`
  visibility: hidden;
  min-width: 120px;
  text-align: right;
  z-index: 2;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding-bottom: 5px;
  @media (max-width: 1024px) {
    position: relative;
    visibility: visible;
    opacity: 1;
  }

  ${DropdownContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }

  a {
    font-size: 15px;
    text-decoration: none;
    color: black;
    padding: 10px 15px;
    transition: border 0.2s linear, color 0.2s linear;

    @media (max-width: 1024px) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 19px;
      height: 100%;
      width: 100%;
      margin-top: 5px;
      &:hover {
        border-left: 3px solid #d59d82;
        color: #d59d82;
      }
    }
  }
`
export default Dropdown
