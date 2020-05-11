import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ContactLink = props => {

    return (
       <NavItem>
           <Link to={props.to}>{props.text}</Link>

       </NavItem>

    )
}

const NavItem = styled.div`
border: 1px solid #d59d82;
margin-left: 5px;
transition: background .3s ease-in-out;
@media (max-width: 1024px) {
    border: none;
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
a {
    font-size: 15px;
    text-decoration: none;
    color: black;
    padding: 10px 15px;
}

&:hover {
    background: #d59d82;
}
`

export default ContactLink;