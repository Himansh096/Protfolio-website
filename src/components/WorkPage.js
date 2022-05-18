import React, { useEffect, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { DarkTheme } from "./Themes"
import LogoComponent from "../subcomponents/LogoComponent"
import SocialIcons from "../subcomponents/SocialIcons"
import PowerButton from "../subcomponents/PowerButton"
import { keyframes } from 'styled-components'
import { Work } from "../data/WorkData"
import Card from '../subcomponents/Card'
import { YinYang } from './AllSvg'
import BigTitle from '../subcomponents/BigTitle'


const Box = styled.div`
background-color: ${props => props.theme.body};
height: 400vh;
position: relative;
overflow: hidden  ;


`



const Rotate = styled.span`
display: block;
position: fixed;
right: 1rem;
z-index: 1;
bottom: 1rem;
`
const float = keyframes
    `0% {transform: translateY(-10px)};
    50% {transform: translateY(15px) translateX(10px)};
    100% {transform: translateY(-10px)};
`
const Main = styled.div`
top: 12rem;
left: calc(0rem + 15vw);
position: fixed;
height: 40vh;
display: flex;
color: white;

li{
    list-style: none;
}

`

function WorkPage() {

    const ref = useRef(null)
    const YinYangref = useRef(null)
    useEffect(() => {

        let element = ref.current;
        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`
            YinYangref.current.style.transform = `rotate(` + -window.pageYOffset + `deg)`
        }

        window.addEventListener('scroll', rotate)
        return () =>
            window.removeEventListener('scroll', rotate)
    }, [])

    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <Main ref={ref}> {Work.map(data =>

                    <li>
                        <Card key={data.id} data={data} />
                    </li>
                )
                }
                </Main>
                <Rotate ref={YinYangref}> <YinYang height={80} width={80} fill={DarkTheme.text} /></Rotate>
                <BigTitle text="WORK" top='10%' right='10%' />
            </Box >
        </ThemeProvider >
    )
}

export default WorkPage
