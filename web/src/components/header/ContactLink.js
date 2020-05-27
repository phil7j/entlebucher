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

&:hover {
    background: #d59d82;
}
@media (max-width: 1024px) {
    border: none;
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    &:hover {
        background: white;
    }
  }
a {
    font-size: 15px;
    text-decoration: none;
    color: black;
    padding: 10px 15px;
    @media (max-width: 1024px) {
        font-size: 26px;
        font-weight: 500;
        transition: border-left .2s ease-in-out, color .2s ease;
        &:hover {
        border-left: 5px solid #d59d82;
        color: #d59d82;
        }
    }
}
`

export default ContactLink;