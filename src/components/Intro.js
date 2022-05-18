import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import ME from "../assets/Images/profile-img.png"
const Box = styled(motion.div)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 65vw;
height: 55vh;
background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
display: flex;
border-left:2px solid ${props => props.theme.body};
border-right:2px solid ${props => props.theme.text};
z-index: 1;
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`
const Text = styled.div`
font-size: calc(1em + 1.5vw);

color: ${props => props.theme.body};
padding:2rem;
display:flex;
cursor: p;
flex-direction: column;
justify-content:space-evenly;
&>:last-child{
   
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
}
`


const Intro = () => {
    return (
        <Box initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}>
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I am The7Crafts</h3>
                    <h6>Hello I am a youtuber an profection marketer</h6>
                </Text>
            </SubBox>
            <SubBox >
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}><img className="pic" src={ME} alt-="Profile Pics" /></motion.div>
            </SubBox>

        </Box>
    )
}

export default Intro