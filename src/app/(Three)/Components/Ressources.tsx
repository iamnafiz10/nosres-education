import React from 'react';
import Image from "next/image";
import albertImage from "../../../../public/assets/images/albert.png";
import {LuDot} from "react-icons/lu";

function Ressources() {
    return (
        <>
            <section id="ressources-section">
                <div className="container pt-16">
                    <div
                        className="relative future-section overflow-hidden rounded-xl p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="col">
                                <h2 className="text-[24px] font-semibold text-black ml-2">
                                    Ressources disponibles
                                </h2>

                                <div className="flex items-center gap-1 mt-4">
                                    <div className="icon">
                                        <LuDot size={28}/>
                                    </div>
                                    <h4 className="text-[16px] text-primary underline cursor-pointer">
                                        Méthodes de lecture-écriture en plusieurs niveaux
                                    </h4>
                                </div>

                                <div className="flex items-center gap-0 mt-2">
                                    <div className="icon">
                                        <LuDot size={28}/>
                                    </div>
                                    <h4 className="text-[16px] text-prgcolor">
                                        Posters et cartes éducatives à imprimer
                                    </h4>
                                </div>

                                <div className="flex items-center gap-0 mt-2">
                                    <div className="icon">
                                        <LuDot size={28}/>
                                    </div>
                                    <h4 className="text-[16px] text-prgcolor">
                                        Guides pour enseignants et parents
                                    </h4>
                                </div>

                                <div className="flex items-center gap-0 mt-2">
                                    <div className="icon">
                                        <LuDot size={28}/>
                                    </div>
                                    <h4 className="text-[16px] text-prgcolor">
                                        Albums illustrés conçus par des enseignants
                                    </h4>
                                </div>

                                <div className="flex items-center gap-0 mt-2">
                                    <div className="icon">
                                        <LuDot size={28}/>
                                    </div>
                                    <h4 className="text-[16px] text-prgcolor">
                                        Kits pédagogiques pour les classes de TPS à GS
                                    </h4>
                                </div>
                            </div>

                            <div data-aos="zoom-in" className="col mt-6 md:mt-0">
                                <Image src={albertImage} className="w-full md:w-[90%] h-full rounded-xl"
                                       alt="albertImage"/>
                            </div>
                        </div>
                    </div>

                    <div
                        className="mt-16 relative z-20 inset-0 bg-gradient-to-r from-[#8BCAE8] to-[#E9EDF9] opacity-[79%] rounded-xl p-10">
                        <div className="grid grid-cols-1 md:grid-cols-12">
                            <div data-aos="zoom-in" className="col md:col-span-5">
                                <Image src={albertImage} className="w-full md:w-[90%] h-full rounded-xl"
                                       alt="albertImage"/>
                            </div>
                            <div
                                className="col md:col-span-7">
                                <h2 className="text-[24px] font-semibold text-black">
                                    Notre approche pédagogique
                                </h2>

                                <h4 className="text-[16px] text-prgcolor mt-1">
                                    Nous mettons l’accent sur le jeu, le respect des
                                    rythmes de l’enfant, la pédagogie active, et des
                                    fondamentaux solides en lecture-écriture pour
                                    favoriser un apprentissage naturel, joyeux et durable.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ressources;