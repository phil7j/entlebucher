import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Dropdown = props => {

    return (
        <DropdownContainer>
            {/* <Link to={props.to}>{props.text}</Link> */}
            <DropdownBtn>{props.text}<Arrow fontSize="medium"/>
              </DropdownBtn>
            <DropdownContent>
                {props.nestedLinks !== undefined ?
                props.nestedLinks.map(link => <Link to={link.link}>{link.text}</Link>)
                : null}
            </DropdownContent>
        </DropdownContainer>

    )
}

const DropdownContainer = styled.div`
  cursor: pointer;
  height: 100%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const Arrow = styled(ArrowDropDownIcon)`
color: #d59d82;
`

const DropdownBtn = styled.div`
color: black;
padding: 0 15px;
font-size: 16px;
display: flex;
align-items: center;

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


 ${DropdownContainer}:hover & {
    visibility: visible;
    opacity: 1;
} 

a {
    /* position: relative; */
    font-size: 15px;
    text-decoration: none;
    color: black;
    padding: 10px 15px;
    /* transition: background 0.8s ease, color 0.8s ease; */
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
`
export default Dropdown;