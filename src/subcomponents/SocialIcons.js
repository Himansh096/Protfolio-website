import React from 'react'
import styled from "styled-components"
import { Github, Facebook, Twitter, YouTube } from "../components/AllSvg"
import { NavLink } from 'react-router-dom'

const Icons = styled.div`
 display: flex;
 align-items:center;
 flex-direction: column;
 position: fixed;
 color: ${props => props.click ? props.theme.body : props.theme.text};
bottom: 0;
left: 2rem;
/* transform: translate(60%,9%); */
z-index:3;
&>*:not(:last-child){
    margin: 0.5rem 0;
}
`




const Line = styled.span`

 background-color: ${props => props.click ? props.theme.body : props.theme.text};
 width: 2px;
 height: 8rem;
 `
const SocialIcons = ({ click }) => {
    return (
        <Icons click={click}>
            <div>
                <NavLink style={{ color: 'inherit' }} target='_blank' to={{ pathname: "https://github.com/" }}>
                    <Github width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target='_blank' to={{ pathname: "https://facebook.com/" }}>
                    <Facebook width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target='_blank' to={{ pathname: "https://twitter.com/" }}>
                    <Twitter width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target='_blank' to={{ pathname: "https://youtube.com/" }}>
                    <YouTube width={25} height={25} fill='currentColor' />
                </NavLink>
            </div>
            <Line click={click} />
        </Icons>
    )
}

export default SocialIcons