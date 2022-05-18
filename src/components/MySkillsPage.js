import React from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { LightTheme } from "./Themes"
import { Design, Develope } from "./AllSvg"
import LogoComponent from "../subcomponents/LogoComponent"
import SocialIcons from "../subcomponents/SocialIcons"
import PowerButton from "../subcomponents/PowerButton"
import ParticleComponents from '../subcomponents/ParticleComponents'
import BigTitle from '../subcomponents/BigTitle'
const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
align-items: center;
justify-content: space-evenly;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color:${props => props.theme.text};
background-color: ${props => props.theme.body};
    height: 60vh;
    width: 30vw;
    padding: 2rem;
    font-family:'Ubuntu Mono', monospace;
    line-height: 1.5;
    cursor: pointer;
    display: flex;
z-index: 3 ;
    flex-direction: column;
    justify-content: space-between;

    &:hover{
        color:${props => props.theme.body};
        background-color:${props => props.theme.text}; ;
    }


`



const Title = styled.h2`
display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em+1vw);
    ${Main}:hover &{
    &>*{
      
        fill:${props => props.theme.body}
    }}
   &:first-child{
       margin-right: 1rem;
   }
`
const Description = styled.div`
color:${props => props.theme.text};
font-size: calc(.6em+1vw);
padding: .5rem 0;

strong{
    text-transform: uppercase;
    margin-bottom: 1rem;
}
${Main}:hover &{
  
      
        color:${props => props.theme.body}
    }

ul,p{
    margin-left: 2rem;
}
`



function MySkillsPage() {
    return (
        <ThemeProvider theme={LightTheme}>
            <Box>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <ParticleComponents theme="light" />
                <Main>
                    <Title><Design width={40} height={40} />Designer</Title>
                    <Description >I love to create design which speaks, Keep it clean, minimal and simple.</Description>
                    <Description><strong>I LIKE TO DESIGN</strong>
                        <ul>
                            <li>
                                Web Design

                            </li>
                            <li>
                                Mobile Apps
                            </li>
                        </ul>
                    </Description>
                    <Description><strong>Tools</strong>
                        <ul>
                            <li>
                                Figma
                            </li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title><Develope width={40} height={40} />Front-End Development</Title>
                    <Description> I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.</Description>
                    <Description><strong>Skills</strong>
                        <p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.</p>
                    </Description>
                    <Description><strong>Tools</strong>
                        <p>VScode, Github, Codepen etc.</p>
                    </Description>
                </Main>
                <BigTitle title="SKILLS" top='30%' left='10%' />
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage