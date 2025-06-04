import React from 'react';
import Image from "next/image";
import albertImage from "../../../../public/assets/images/albert.png";

function Offrir() {
    return (
        <>
            <section id="offrir-section" className="bg-[#F4F4F4] mt-8">
                <div className="container py-16">
                    <div className="relative future-section overflow-hidden rounded-xl p-10">
                        <div className="grid grid-cols-1 md:grid-cols-12">
                            <div className="col md:col-span-5">
                                <Image src={albertImage} className="w-full md:w-[90%] h-full rounded-xl"
                                       alt="albertImage"/>
                            </div>
                            <div
                                className="col mt-6 md:mt-0 md:col-span-7 bg-[#fafafa38] p-6 flex flex-col justify-center rounded-xl">
                                <h2 className="text-[24px] font-semibold text-black">
                                    Offrir une éducation de qualité, inclusive<br/>
                                    et durable
                                </h2>

                                <h4 className="text-[16px] text-prgcolor mt-1">
                                    Nous développons des ressources, des outils et des
                                    environnements d’apprentissage conçus avec des
                                    éducateurs, des chercheurs et des créateurs pédagogiques
                                    engagés.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Offrir;