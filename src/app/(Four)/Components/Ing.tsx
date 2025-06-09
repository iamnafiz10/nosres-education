import React from 'react';
import {
    PiNumberCircleFourLight,
    PiNumberCircleOneLight,
    PiNumberCircleThreeLight,
    PiNumberCircleTwoLight
} from "react-icons/pi";
import Image from "next/image";
import childPlayImg from "../../../../public/assets/images/ing.jpg";

function Ing() {
    return (
        <>
            <section id="ing-section">
                <div className="container pt-16">
                    <div className="wrap">
                        <div
                             className="card_box col image-box p-12 flex flex-col justify-center rounded-xl relative overflow-hidden aos-init aos-animate">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-[#8BCAE8] to-[#C5B097] opacity-[79%] z-10"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="col z-20 bg-[#b9bdbf5c] p-8 text-white rounded-xl">
                                    <h4 className="text-[24px] font-[600]">Ingéniosité</h4>
                                    <h4 className="text-[16px] mt-3">
                                        Nous valorisons la capacité à inventer, à innover et à penser
                                        autrement. Chez Nosres laboratoire éducatif, l’ingéniosité signifie :
                                    </h4>
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <PiNumberCircleOneLight size={40}/>
                                        </div>
                                        <h4 className="text-[16px]">
                                            Savoir formuler des idées originales pour répondre à des besoins
                                            réels.
                                        </h4>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <PiNumberCircleTwoLight size={40}/>
                                        </div>
                                        <h4 className="text-[16px]">
                                            Explorer plusieurs pistes avant de trouver la solution la plus
                                            pertinente.
                                        </h4>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <PiNumberCircleThreeLight size={40}/>
                                        </div>
                                        <h4 className="text-[16px]">
                                            Concevoir des outils pédagogiques créatifs, fonctionnels et
                                            inspirants.
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <PiNumberCircleFourLight size={40}/>
                                        </div>
                                        <h4 className="text-[16px]">
                                            Encourager les enfants, les enseignants et les concepteurs à faire
                                            preuve d’audace, de curiosité et d’esprit critique.
                                        </h4>
                                    </div>
                                </div>
                                <div className="col">
                                    <Image src={childPlayImg} className="w-[100%] rounded-xl h-full relative z-20"
                                           alt="childPlayImg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ing;