import React from 'react';
import Image from "next/image";
import SliderOne from "../../../../public/assets/images/child.jpg";

function Ce() {
    return (
        <>
            <section id="ce-section" className="bg-[#F4F4F4] mt-8">
                <div className="container py-16">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Ce que nous faisons
                        </h1>
                        <p>
                            Nous créons et développons :
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        <div data-aos="zoom-in" className="col">
                            <div className="h-full xl:h-[360px] cursor-pointer image-box bg-white rounded-md">
                                <Image src={SliderOne} className="w-full h-52 rounded-md rounded-b-none"
                                       alt="SliderOne"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-[16px]">
                                        Ressources éducatives innovantes
                                    </h3>
                                    <h4 className="text-[14px] mt-2">
                                        Nous concevons des livres, outils
                                        numériques et contenus libres pour soutenir
                                        l’apprentissage et stimuler la curiosité.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="h-full xl:h-[360px] cursor-pointer image-box bg-white rounded-md">
                                <Image src={SliderOne} className="w-full h-52 rounded-md rounded-b-none"
                                       alt="SliderOne"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-[16px]">
                                        Programmes pour tous
                                    </h3>
                                    <h4 className="text-[14px] mt-2">
                                        Nous développons des programmes adaptés
                                        aux besoins des écoles, enseignants et
                                        familles, pour renforcer l’éducation à tous les
                                        niveaux.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="h-full xl:h-[360px] cursor-pointer image-box bg-white rounded-md">
                                <Image src={SliderOne} className="w-full h-52 rounded-md rounded-b-none"
                                       alt="SliderOne"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-[16px]">
                                        Projets de recherche et collaborations
                                    </h3>
                                    <h4 className="text-[14px] mt-2">
                                        Nous menons des recherches et collaborons
                                        avec des acteurs éducatifs en France et à
                                        l’international pour faire avancer la réflexion
                                        pédagogique.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ce;