import styled from "styled-components"
import React from "react"

const Logo = styled.h1`
display: inline-block;
    font-family: 'Pacifico', cursive;
    color: ${props => props.click ? props.theme.body : props.theme.text};
    position: fixed;
    top: 2rem;
    left: 2rem;
`
const LogoComponent = ({ click }) => {
    return (
        <Logo click={click}>CD</Logo>
    )
}

export default LogoComponent