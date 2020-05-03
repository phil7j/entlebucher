import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Dropdown = props => {

    return (
        <DropdownContainer>
            {/* <Link to={props.to}>{props.text}</Link> */}
            <DropdownBtn>{props.text}
            <DropdownContent>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </DropdownContent>
            </DropdownBtn>
        </DropdownContainer>

    )
}

const DropdownContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* transition: all 0.5s ease; */


  @media (max-width: 1024px) {
    width: 100%;
    /* justify-content: center; */
  }
`

const DropdownBtn = styled.div`
/* background-color: yellow; */
border: 1px solid red;
color: black;
padding: 20px 20px;
font-size: 25px;

`

const DropdownContent = styled.div`
display: none;
border: 1px solid green;
padding: 20px;
/* min-width: 160px; */
text-align: left;
z-index: 1;

 ${DropdownContainer}:hover & {
    display: flex;
    flex-direction: column;
    position: absolute;
} 

a {
    /* position: relative; */
    font-size: 15px;
    text-decoration: none;
    color: black;
    padding: 10px 10px;
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