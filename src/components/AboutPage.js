import React from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { DarkTheme } from "./Themes"
import BigTitle from '../subcomponents/BigTitle'
import LogoComponent from "../subcomponents/LogoComponent"
import SocialIcons from "../subcomponents/SocialIcons"
import PowerButton from "../subcomponents/PowerButton"
import ParticleComponents from '../subcomponents/ParticleComponents'
import astronaut from "../assets/Images/spaceman.png"
import { keyframes } from 'styled-components'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden  ;


`


const Main = styled.div`

width: 50vw;
height: 60vh;
 border: 2px solid ${props => props.theme.text};
color:${props => props.theme.text};
font-family:'Ubuntu Mono', monospace;
 line-height: 1.5;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 top:10rem;
 font-size: calc(0.6rem + 1vw);
 left: calc(5rem + 5vw);
 padding:2rem;

`

const float = keyframes
    `0% {transform: translateY(-10px)};
    50% {transform: translateY(15px) translateX(10px)};
    100% {transform: translateY(-10px)};
`

const SpaceMan = styled.div`

position: absolute;
top:10%;
right:5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100% ;
    height: 100%;
}
`



function AboutPage() {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <ParticleComponents theme="dark" />
                <SpaceMan>
                    <img alt="spaceman" src={astronaut}></img>
                </SpaceMan>
                <Main>
                    I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience. <br /><br />I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books. <br /><br />I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
                </Main >
                <BigTitle text="ABOUT" top="5%" left="10%" />
            </Box >
        </ThemeProvider >
    )
}

export default AboutPage