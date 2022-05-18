import React from 'react'
import styled from 'styled-components'
// import { rgbaToHsva } from 'tsparticles/Utils'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subcomponents/LogoComponent'
import PowerButton from '../subcomponents/PowerButton'
import SocialIcons from '../subcomponents/SocialIcons'
import BlogComponent from './BlogComponent'
import AnchorComponent from "../subcomponents/AnchorComponent"
import { Blogs } from "../data/BlogData"
import BigTitle from '../subcomponents/BigTitle'


const MainContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
/* width:100vw; */
height: 100%;
`

const Container = styled.div`
 background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width:100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`
function BlogPage() {
    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <AnchorComponent />
                <Center>
                    <Grid>
                        {Blogs.map(blog => { return <BlogComponent key={blog.id} img={blog.imgSrc} name={blog.name} tags={blog.tags} date={blog.date} link={blog.link} /> })
                        }

                    </Grid>
                </Center>
            </Container>
            <BigTitle text="BlOG" top="5%" left="10%" />
        </MainContainer>
    )
}

export default BlogPage


// background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
// width: 100%;
// height:auto;
// position: relative;
// padding-bottom: 5rem;