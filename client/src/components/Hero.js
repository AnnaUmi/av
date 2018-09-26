import React from 'react';
import bg from '../img/bg.jpg'
import HeroTitle from './utiles/HeroTitle';
import { Parallax } from 'react-parallax';

const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%", 
    transform: "translate(-50%,-50%)"
};
const Hero = () => {
    return (

        <Parallax
            bgClassName="hero_bg"
            bgImage={bg}
            strength={700}
        >
            <div style={{ height: 700 }}>
                <HeroTitle style={insideStyles} />
            </div>
        </Parallax>



    );
};

export default Hero;