import React, { useState } from 'react'
import {HeroContainer, HeroBG, VideoBG, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElement'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBG>
            <HeroContent>
            {/* Virtual Banking Made Easy */}
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    {/* Sign up for a new account today and recieve Ksh1000 in credit 
                    towards your next payment. */}
                    it’s easy to get into your own head when it comes to money. 
                    the path to financial wellness starts here.
                    {/* Join an ethical bank that uses its savers' money to lend to charities and social enterprises. */}
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
