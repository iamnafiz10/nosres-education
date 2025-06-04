import React from 'react';
import {LuBrain, LuLightbulb, LuPuzzle, LuSprout} from "react-icons/lu";
import {
    PiNumberCircleOneLight,
    PiNumberCircleThreeLight,
    PiNumberCircleTwoLight
} from "react-icons/pi";

function Notre() {
    return (
        <>
            <section id="notre-section">
                <div className="container pt-16">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Notre approche
                        </h1>
                        <p>
                            Chez Nosres Education, nous croyons que l’école ne doit pas
                            seulement transmettre des savoirs,<br/> mais aussi cultiver
                            l’imagination, l’autonomie et l’esprit critique.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
                        <div className="col lg:col-span-7">
                            <div data-aos="zoom-in" data-aos-duration="1000"
                                 className="card_box col image-box py-10 px-8 flex flex-col justify-center rounded-xl relative overflow-hidden aos-init aos-animate">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-[#3C6088] to-[#999999] opacity-[79%] z-10"></div>
                                <div
                                    className="content z-20 bg-[#b9bdbf5c] p-4 text-white rounded-xl flex items-center gap-2">
                                    <div className="icon">
                                        <LuSprout size={50}/>
                                    </div>
                                    <h4 className="mt-3 text-[14px]">
                                        Apprendre, c’est aussi inventer, explorer, construire et<br/>
                                        transformer le réel.
                                    </h4>
                                </div>

                                <div className="content z-20 bg-[#b9bdbf5c] mt-8 p-4 text-white rounded-xl">
                                    <h4 className="text-[18px]">Nos ressources et programmes sont conçus pour :</h4>
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <PiNumberCircleOneLight size={40}/>
                                        </div>
                                        <h4 className="text-[14px]">
                                            Encourager la créativité dès le plus jeune âge, dans toutes<br/>
                                            les disciplines.
                                        </h4>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <PiNumberCircleTwoLight size={40}/>
                                        </div>
                                        <h4 className="text-[14px]">
                                            Développer des compétences de résolution de problèmes<br/>
                                            concrets, en lien avec la vie réelle.
                                        </h4>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <PiNumberCircleThreeLight size={40}/>
                                        </div>
                                        <h4 className="text-[14px]">
                                            Stimuler l’innovation pédagogique par le jeu, le design, la<br/>
                                            recherche et l’expérimentation.
                                        </h4>
                                    </div>
                                    <h4 className="text-[14px] mt-4">
                                        Parce que les enfants et les jeunes d’aujourd’hui seront les
                                        créateurs du monde de demain, nous plaçons la créativité et
                                        l’ingéniosité au cœur de l’apprentissage.
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="col lg:col-span-5">
                            <div data-aos="zoom-in" data-aos-duration="1000"
                                 className="card_box col image-box p-6 flex flex-col justify-center rounded-xl relative overflow-hidden aos-init aos-animate">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-[#3C6088] to-[#DAE2F9] opacity-[64%] z-10"></div>
                                <div
                                    className="content z-20 bg-[#BCC8D9] text-white p-5 rounded-xl flex items-center gap-2">
                                    <div className="icon">
                                        <LuLightbulb size={50}/>
                                    </div>
                                    <h2 className="font-semibold text-[18px]">
                                        Créativité
                                    </h2>
                                </div>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="1000"
                                 className="card_box mt-4 col image-box p-6 flex flex-col justify-center rounded-xl relative overflow-hidden aos-init aos-animate">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-[#8BCAE8] to-[#C5B097] opacity-[64%] z-10"></div>
                                <div
                                    className="content z-20 bg-[#D3E0E4] text-white p-6 rounded-xl flex items-center gap-2">
                                    <div className="icon">
                                        <LuPuzzle size={50}/>
                                    </div>
                                    <h2 className="font-semibold text-[18px]">
                                        Résolution de problèmes
                                    </h2>
                                </div>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="1000"
                                 className="card_box mt-4 col image-box p-6 flex flex-col justify-center rounded-xl relative overflow-hidden aos-init aos-animate">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-[#29A9E0] to-[#DAE2F9] opacity-[64%] z-10"></div>
                                <div
                                    className="content z-20 bg-[#CBE6F8] text-white p-6 rounded-xl flex items-center gap-3">
                                    <div className="icon">
                                        <LuBrain size={50}/>
                                    </div>
                                    <h2 className="font-semibold text-[18px]">
                                        Innovation
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Notre;