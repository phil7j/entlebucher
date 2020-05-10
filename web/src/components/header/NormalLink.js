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

a {
    font-size: 15px;
    text-decoration: none;
    color: black;
    padding: 10px 15px;
}
`

export default NormalLink;
