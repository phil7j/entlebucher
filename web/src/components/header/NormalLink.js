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
    margin-top: 20px;
    border-top: 2px solid #d59d82
  }
a {
    font-size: 15px;
    text-decoration: none;
    color: black;
    padding: 10px 15px;
}
`

export default NormalLink;
