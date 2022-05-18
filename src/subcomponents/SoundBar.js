import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import music from "../assets/audio/u-said-it-v13-1167.mp3"

const Box = styled.div`
display: flex;
position: fixed;
left: 8rem;
top: 3rem;
z-index: 10;
cursor: pointer;
`

const play = keyframes`
0%{
transform: scaleY(1);
}
50%{
    transform: scaleY(2);  
}
100%{
    transform: scaleY(1);
}
`
const Line = styled.span`
height: 1rem;
width: 2px;
margin: 0 0.1rem;
color: black;
border: 1px solid ${props => props.theme.body};
background:${props => props.theme.text}; 
animation: ${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
`
const SoundBar = () => {
    const ref = useRef(null)
    const [click, setClick] = useState(false)

    const handelClick = () => {
        setClick(!click);
        if (!click) { ref.current.play() }
        else { ref.current.pause() }
    }
    return (
        <Box onClick={() => { handelClick() }}>
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <audio src={music} ref={ref} loop /></Box>
    )
}

export default SoundBar