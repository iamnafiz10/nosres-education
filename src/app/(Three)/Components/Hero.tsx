import React from 'react';
import heroImage from "../../../../public/assets/images/edu-one-hero.jpg";

const Hero = () => {
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[450px] pt-[4rem] pb-[5rem]"
                     style={{backgroundImage: `url(${heroImage.src})`}}>
                <div className="container text-center">
                    <h4 className="text-2xl md:text-[38px] leading-10 text-white font-bold md:font-medium">
                        Maternelle
                    </h4>
                    <h1 className="text-white text-[16px] mt-3">
                        Découvrir, explorer, s’éveiller
                    </h1>
                </div>
            </section>
        </>
    );
};

export default Hero;