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
                            Chez Nosres laboratoire éducatif, nous explorons, testons et construisons les pédagogies de
                            demain.<br/>
                            Notre démarche repose sur trois principes fondamentaux :
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        <div className="col">
                            <div className="h-full xl:h-[380px] cursor-pointer image-box bg-white rounded-md">
                                <Image src={SliderOne} className="w-full h-48 rounded-md rounded-b-none"
                                       alt="SliderOne"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-[16px]">
                                        Prototypes pédagogiques
                                    </h3>
                                    <h4 className="text-[14px] mt-2">
                                        Nous concevons et testons des
                                        modules éducatifs originaux :
                                        projets interdisciplinaires, outils
                                        numériques, formats
                                        d’apprentissage hybrides, etc.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="h-full xl:h-[380px] cursor-pointer image-box bg-white rounded-md">
                                <Image src={SliderOne} className="w-full h-48 rounded-md rounded-b-none"
                                       alt="SliderOne"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-[16px]">
                                        Recherche appliquée
                                    </h3>
                                    <h4 className="text-[14px] mt-2">
                                        Nous menons des
                                        recherches-action en lien avec
                                        nos projets pour évaluer l’impact
                                        des innovations pédagogiques
                                        sur le terrain.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="h-full xl:h-[380px] cursor-pointer image-box bg-white rounded-md">
                                <Image src={SliderOne} className="w-full h-48 rounded-md rounded-b-none"
                                       alt="SliderOne"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-[16px]">
                                        Co-création
                                    </h3>
                                    <h4 className="text-[14px] mt-2">
                                        Nous travaillons avec des
                                        enseignants, chercheurs,
                                        designers et étudiants pour
                                        imaginer ensemble l’éducation de
                                        demain.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="h-full xl:h-[380px] cursor-pointer image-box bg-white rounded-md">
                                <Image src={SliderOne} className="w-full h-48 rounded-md rounded-b-none"
                                       alt="SliderOne"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-[16px]">
                                        Accessibilité et inclusion
                                    </h3>
                                    <h4 className="text-[14px] mt-2">
                                        Nous plaçons l’équité
                                        éducative au cœur de nos
                                        projets, en développant des
                                        ressources accessibles à
                                        toutes et tous.
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