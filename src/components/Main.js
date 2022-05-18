import React, { useState } from 'react'
import PowerButton from "../subcomponents/PowerButton"
import { motion } from 'framer-motion'
import styled, { keyframes } from "styled-components"
import LogoComponent from "../subcomponents/LogoComponent"
import SocialIcons from "../subcomponents/SocialIcons"
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSvg'
import Intro from './Intro'


const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }`



const MainConatiner = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: realtive;

    h2,h3,h4,h5,h6{
    font-family:'Karla', sans-serif;
    font-weight:500;
    }
    `

const Contaner = styled.div`
    padding: 2rem;
    `
const Contact = styled(NavLink)`
    position: fixed;
    color: ${props => props.theme.text};
    right: 2rem;
    top: 2rem;
    text-decoration: none;
    `
const BLOG = styled(NavLink)`
    position: absolute;
    color: ${props => props.theme.text};
    right: 2rem;
    top: 50%;
    text-decoration: none;
z-index: 1;
transform:  rotate(90deg) translate(-30%, -60%);
    `

const WORK = styled(NavLink)`
position: absolute;
color: ${props => props.click ? props.theme.body : props.theme.text};
left: 2rem;
top: 50%;
text-decoration: none;
z-index: 1;
transform: translate(-30%, -60%) rotate(-90deg)  ;
`
const ABOUT = styled(NavLink)`

color: ${props => props.click ? props.theme.body : props.theme.text};

text-decoration: none;
z-index: 1;

`

const MYSKILL = styled(NavLink)`

color: ${props => props.theme.text};

text-decoration: none;
z-index: 1;

`
const BottomBar = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    bottom: 1rem;
`
const Center = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translate(-50%,-50%);
    align-items: center;
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left:  ${props => props.click ? '92%' : '50%'};
    transition: all 1s ease;
    cursor: pointer;
    &>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}
    &>:last-child{
        display: ${props => props.click ? "none" : "inline-block"};
        padding: 1rem;
    }
    `
const DarkDiv = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 50%;
    background-color: #000;
    height: ${props => props.click ? " 100%" : '0'};
    width: ${props => props.click ? " 50%" : '0'};
    transition: height .5s ease, width 1s ease;
    `
function Main() {


    const [click, setClick] = useState(false)
    const handleClick = () => { setClick(!click) }

    return (
        <MainConatiner>
            <DarkDiv click={click} />
            <Contaner>
                <PowerButton />
                <LogoComponent click={click} />
                <SocialIcons click={click} />
                <Center click={click}>
                    <YinYang onClick={() => handleClick()} height={click ? 120 : 150} width={click ? 120 : 150} />
                    <span>Click Me</span>
                </Center>

                <Contact target="_blank" to={{ pathname: "himanshu.arora096@gmail.com" }}>
                    <motion.h2
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >Say Hi..</motion.h2>
                </Contact>
                <BLOG to="/blog">
                    <motion.h2 whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>Blog</motion.h2>
                </BLOG>
                <WORK to='/work' click={click}>
                    <motion.h2
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        Work
                    </motion.h2>
                </WORK>
                <BottomBar>
                    <ABOUT to='/About' click={click}>
                        <motion.h2
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            About
                        </motion.h2>
                    </ABOUT>
                    <MYSKILL to='/skills'>
                        <motion.h2
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            My Skill
                        </motion.h2>
                    </MYSKILL>

                </BottomBar>
            </Contaner >
            {click ? <Intro click={click} /> : null}
        </MainConatiner>
    )
}

export default Main