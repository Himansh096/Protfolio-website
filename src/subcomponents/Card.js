import React from 'react'
import styled from 'styled-components'
import { Github } from '../components/AllSvg'

const Box = styled.div`
height:40vh;
width:16rem;
border:2px solid wheat;
padding:1.5rem 2rem;
background-color: ${props => props.theme.text};
color:${props => props.theme.body} ;
margin-right:8rem;
font-family: 'Source Sans Pro', sans-serif;
border-radius:0% 25%;
transition: all .2s ease;
border: 1px solid ${props => props.theme.text} ;

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text} ; 
border: 1px solid ${props => props.theme.text} ;
}`

const Title = styled.h2`

`

const Description = styled.p`
padding: 1.5rem 0;
font-family: "Karla", sans-serif;
border-bottom: 2px solid ${props => props.theme.body}; ;
`

const Demo = styled.button`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
padding:  0.5rem 3.75rem;
border-radius: 0px 0px 0px 50px;
font-size: 20px;

${Box}:hover{
    background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
}
`
const Links = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1.5rem 0;
`
const Tag = styled.h4`  
    padding-top: 10px;
    padding-left: 5px;
    font-weight: 400;
    font-size: calc(.8em + .3vw);
    line-height: 6px;
    
    &:first-child{
        padding-left: 0;
    }
    
    `

const Hashtag = styled.div`
    padding:0.2rem 0;`


const Card = ({ data }) => {

    const { id, name, description, tags, demo, github } = data

    return (
        <Box>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Hashtag>{tags.map((tag, id) => { return <Tag id={id}>#{tag}</Tag> })}</Hashtag>
            <Links>
                <Demo>Visit</Demo>
                <Github width={30} height={30} fill='currentColor' />
            </Links>
        </Box>
    )
}

export default Card

