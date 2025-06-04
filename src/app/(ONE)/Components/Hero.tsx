import React from 'react';
import heroImage from "../../../../public/assets/images/edu-one-hero.jpg";

const Hero = () => {
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[450px] pt-[4rem] pb-[5rem]"
                     style={{backgroundImage: `url(${heroImage.src})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-10 text-white font-bold md:font-medium">
                        L’éducation éclaire les esprits, élève les âmes et<br/>
                        fait avancer le monde
                    </h1>
                    <h4 className="mt-4 text-white text-[16px]">
                        L’éducation pour apprendre, penser, créer.
                    </h4>
                    <button
                        className="mt-4 cursor-pointer flex items-center justify-center bg-primary border border-primary text-[14px] hover:bg-white hover:border-white hover:text-primary rounded text-white py-3 px-4">
                        Découvrir nos livres
                    </button>
                </div>
            </section>
        </>
    );
};

export default Hero;