import React from 'react';
import bg from '../img/bg.jpg'
import HeroTitle from './utiles/HeroTitle';
import { Parallax } from 'react-scroll-parallax';


const Hero = () => {
    return (
        <React.Fragment>
            <Parallax offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure">
                <div className="hero" style={{
                    height: `${window.innerHeight}px`,
                    overflow: 'hidden',
                    background: `url(${bg})`,
                    position: 'relative'
                }}>
                </div>
            </Parallax>

            <HeroTitle />
        </React.Fragment>

    );
};

export default Hero;