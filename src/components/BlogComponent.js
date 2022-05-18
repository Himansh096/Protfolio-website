import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'



const Box = styled(NavLink)`
text-decoration: none;
padding: 0.5rem;
width: calc(10rem + 15vw);
height: 20rem;
color: ${props => props.theme.text};
border: 2px solid black;
box-shadow:0 0 1rem 0 rgba(0,0,0,0.2) ;

&:hover{
color: ${props => props.theme.body};
background-color: ${props => props.theme.text};
}
`
const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
    height: 60%;
    background-size: cover;
    background-position: center;
`

const Title = styled.h3`
color:inherit;
 width: 100%; 
 font-size: 16px;
 font-weight: 700;
 font-family: 'Karla', sans-serif;
 padding: 0.5rem 0;
border-bottom: 1px solid ${props => props.theme.text};                               

`

const Tag = styled.h4`  
padding-top: 10px;
padding-left: 5px;
font-weight: 400;
font-size: 14px;

&:first-child{
    padding-left: 0;
}

`

const Hashtag = styled.div`
padding:0.2rem 0;`

const Date = styled.h4`
padding-top:0.2rem;
font-weight: 400;
font-size: 14px;
`

const BlogComponent = (props) => {
    return (
        <Box target="_blank" to={{ pathname: props.link }}>

            <Image img={props.img} />
            <Title>{props.name}</Title>
            <Hashtag>{props.tags.map((tag, id) => { return <Tag id={id}>#{tag}</Tag> })}</Hashtag>
            <Date>{props.date}</Date>

        </Box>
    )
}

export default BlogComponent