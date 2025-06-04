import React from 'react';
import heroImage from "../../../../public/assets/images/edu-one-hero.jpg";

const Hero = () => {
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[450px] pt-[4rem] pb-[5rem]"
                     style={{backgroundImage: `url(${heroImage.src})`}}>
                <div className="container text-center">
                    <h4 className="text-white text-[16px]">
                        Notre mission
                    </h4>
                    <h1 className="text-2xl mt-3 md:text-[38px] leading-10 text-white font-bold md:font-medium">
                        Donner à chacun les moyens d’apprendre, de penser<br/>
                        et de créer, tout au long de la vie.
                    </h1>
                </div>
            </section>
        </>
    );
};

export default Hero;