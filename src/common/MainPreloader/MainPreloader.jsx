import React from 'react'
import { PreloaderWrapper, CircleWrapper, DotWrapper, Dot } from './mainPreloader.styled';

const MainPreloader = () => {

    return (
        <PreloaderWrapper>
            <CircleWrapper>
                <defs>
                    <filter id="gooeyness">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
                        <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
                    </filter>
                </defs>
            </CircleWrapper>
            <DotWrapper>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
            </DotWrapper>
        </PreloaderWrapper>

    )
}

export default MainPreloader