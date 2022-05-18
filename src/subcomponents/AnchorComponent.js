import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, Anchor } from '../components/AllSvg'


const Container = styled.div`
position:relative;`

const Slider = styled.div`
position: fixed;
    top: 0;
    right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: translateY(-50%);

    .chain{
       transform: rotate(135deg );
    }
`

function AnchorComponent() {

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeigth = document.body.offsetHeight;
            let diff = Math.max(bodyHeigth - (scrollPosition + windowSize))
            let diffP = (diff * 100) / (bodyHeigth - windowSize)
            ref.current.style.transform = `translateY(${-diffP}%)`

            if (window.pageYOffset > 5) {
                hiddenRef.current.style.display = 'none'
            }

            else {
                hiddenRef.current.style.display = 'block'
            }
        }
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const ref = null;
    const hiddenRef = null;

    return (
        <Container>
            <Slider ref={ref}>
                {
                    [...Array(25)].map((x, id) => {
                        return <Link key={id} width={30} height={30} fill='currentColor' className="chain" />
                    })
                }
                <Anchor width={70} height={70} fill='currentColor' />
            </Slider>
        </Container>
    )
}

export default AnchorComponent