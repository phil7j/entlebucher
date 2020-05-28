import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NormalLink = props => {

    return (
       <NavItem>
           <Link to={props.to}>{props.text}</Link>

       </NavItem>

    )
}

const NavItem = styled.div`
 @media (max-width: 1024px) {
    padding: 15px;
  }
a {
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    color: black;
    padding: 10px 15px;
    @media (max-width: 1024px) {
    font-size: 26px;
    transition: border-left .2s ease-in-out, color .2s ease;
    &:hover {
        border-left: 5px solid #d59d82;
        color: #d59d82;
    }
    }
}
`

export default NormalLink;
