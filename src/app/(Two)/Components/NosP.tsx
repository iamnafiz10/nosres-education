import React from 'react';
import {LuBadgeCheck, LuEarth, LuLightbulb} from "react-icons/lu";
import circleImg from '../../../../public/assets/images/circle.png'
import childPlayImg from '../../../../public/assets/images/child-play.jpg'
import Image from "next/image";
import {
    PiNumberCircleFourLight,
    PiNumberCircleOneLight,
    PiNumberCircleThreeLight,
    PiNumberCircleTwoLight
} from "react-icons/pi";
import {IoIosArrowForward} from "react-icons/io";

function NosP() {
    return (
        <>
            <section id="nosp-section">
                <div className="container pt-16">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Nos principes
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        <div data-aos="zoom-in" className="col">
                            <div className="icon">
                                <LuEarth size={40} className="text-gray-400"/>
                            </div>
                            <h4 className="text-[16px] mt-2 text-black">
                                Accessibilité
                            </h4>
                            <p className="text-[14px] text-prgcolor">
                                L’apprentissage pour tous, sans distinction<br/>
                                d’origine, de statut ou de territoire.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="icon">
                                <LuLightbulb size={40} className="text-gray-400"/>
                            </div>
                            <h4 className="text-[16px] mt-2 text-black">
                                Créativité
                            </h4>
                            <p className="text-[14px] text-prgcolor">
                                Une pédagogie active, centrée sur l’élève et la<br/>
                                pensée critique.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="icon">
                                <LuBadgeCheck size={40} className="text-gray-400"/>
                            </div>
                            <h4 className="text-[16px] mt-2 text-black">
                                Qualité
                            </h4>
                            <p className="text-[14px] text-prgcolor">
                                Des contenus rigoureux, conçus avec des<br/>
                                experts et des praticiens.
                            </p>
                        </div>
                    </div>

                    <div className="head-wrap mt-8">
                        <h1 className="font-semibold text-[24px]">
                            Nos initiatives phares
                        </h1>
                    </div>
                    <div
                        className="mt-6 content z-20 inset-0 bg-gradient-to-r from-[#3C6088] to-[#C5B097] opacity-[79%] text-white p-12 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div data-aos="zoom-in" className="col">
                                <div
                                    className="h-full md:h-[190px] bg-[#c4cfe026] py-4 px-8 rounded-xl">
                                    <div className="text mt-2">
                                        <h4 className="text-[18px]">
                                            Nosres Books
                                        </h4>
                                        <p className="text-[14px] mt-3">
                                            Une marque éditoriale de Nosres, dédiée à la création d’ouvrages
                                            éducatifs de qualité, pensés pour accompagner les apprenants, les
                                            enseignants et les passionnés de savoir.
                                        </p>

                                        <button type='button'
                                                className="mt-2 flex items-center gap-1 cursor-pointer text-[14px] text-white hover:text-white hover:underline">
                                            En savoir plus
                                            <span className="icon">
                                                <IoIosArrowForward size={15}/>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col">
                                <div
                                    className="h-full md:h-[190px] bg-[#c4cfe026] py-4 px-8 rounded-xl">
                                    <div className="text mt-2">
                                        <h4 className="text-[18px]">
                                            Nosres laboratoire éducatif
                                        </h4>
                                        <p className="text-[14px] mt-3">
                                            Un studio interne de Nosres dédié à la recherche, à l’innovation
                                            pédagogique et au prototypage de nouvelles approches
                                            d’apprentissage.
                                        </p>

                                        <button type='button'
                                                className="mt-2 flex items-center gap-1 cursor-pointer text-[14px] text-white hover:text-white hover:underline">
                                            En savoir plus
                                            <span className="icon">
                                                <IoIosArrowForward size={15}/>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mt-8 content z-20 inset-0 bg-gradient-to-r from-[#C5B097] to-[#E4EAF9] opacity-[79%] text-white p-12 rounded-xl">
                        <div
                            className="bg-[#5c59591f] py-4 px-8 rounded-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
                                <div className="text mt-2">
                                    <h4 className="text-[24px]">
                                        Notre engagement
                                    </h4>
                                    <p className="text-[14px] mt-2">
                                        Nous travaillons avec des enseignants, des chercheurs, des institutions, des
                                        associations et des innovateurs en éducation pour développer des projets
                                        concrets à fort impact.
                                        <br/><br/>
                                        En nous appuyant sur les sciences de l’éducation, le design pédagogique et les
                                        technologies utiles, nous voulons bâtir un écosystème éducatif plus humain, plus
                                        durable, plus libre.
                                    </p>
                                </div>
                                <div data-aos="zoom-in" className="image flex justify-start md:justify-end">
                                    <Image src={circleImg} className="w-[40%] h-full" alt="circleImg"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="mt-8 content z-20 inset-0 bg-gradient-to-r from-[#8BCAE8] to-[#C5B097] opacity-[79%] text-white p-12 rounded-xl">
                        <div className="head-wrap">
                            <h1 className="font-semibold text-[24px]">
                                La vision de Nosres Education de l’enfant du futur
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div data-aos="zoom-in" className="col">
                                <div
                                    className="h-full md:h-[190px] mt-6 bg-[#53537438] py-4 px-8 rounded-xl">
                                    <div className="text mt-2">
                                        <h4 className="text-[18px] border-b border-white">
                                            Ingéniosité
                                        </h4>
                                        <p className="text-[14px] mt-3">
                                            Cultiver la capacité à inventer et à innover, en incitant les enfants à
                                            imaginer des solutions nouvelles et utiles, à explorer différentes
                                            pistes, transformer les obstacles en opportunités d’apprentissage
                                            et penser autrement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col">
                                <div
                                    className="h-full md:h-[190px] mt-6 bg-[#53537438] py-4 px-8 rounded-xl">
                                    <div className="text mt-2">
                                        <h4 className="text-[18px] border-b border-white">
                                            Pensée autonome
                                        </h4>
                                        <p className="text-[14px] mt-3">
                                            Favoriser une réflexion personnelle et critique, pour que chaque
                                            enfant apprenne à poser des questions, à analyser et à construire
                                            son propre point de vue.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col">
                                <div
                                    className="h-full md:h-[190px] mt-6 bg-[#53537438] py-4 px-8 rounded-xl">
                                    <div className="text mt-2">
                                        <h4 className="text-[18px] border-b border-white">
                                            Esprit de collaboration
                                        </h4>
                                        <p className="text-[14px] mt-3">
                                            Stimuler le travail en équipe, l’écoute et le respect des idées des
                                            autres pour apprendre ensemble et co-construire des réponses aux
                                            défis du monde.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col">
                                <div
                                    className="h-full md:h-[190px] mt-6 bg-[#53537438] py-4 px-8 rounded-xl">
                                    <div className="text mt-2">
                                        <h4 className="text-[18px] border-b border-white">
                                            Ouverture et plaisir d’apprendre
                                        </h4>
                                        <p className="text-[14px] mt-3">
                                            Proposer des ressources engageantes, esthétiques et accessibles,
                                            pour entretenir la curiosité et le goût d’apprendre tout au long de la
                                            vie.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 wrap">
                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="card_box col image-box p-12 flex flex-col justify-center rounded-xl relative overflow-hidden aos-init aos-animate">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-[#979797] to-[#F0F0F0] opacity-[79%] z-10"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col z-20 bg-[#b9bdbf5c] p-8 text-white rounded-xl">
                                    <h4 className="text-[24px]">Penser autrement</h4>
                                    <h4 className="text-[14px]">
                                        L’enfant doit penser de manière critique et créative est essentielle pour<br/>
                                        innover, résoudre des problèmes complexes ou simplement<br/>
                                        comprendre le monde autrement.
                                    </h4>
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <PiNumberCircleOneLight size={40}/>
                                        </div>
                                        <h4 className="text-[14px]">
                                            Remettre en question les évidences ou les solutions toutes faites
                                        </h4>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <PiNumberCircleTwoLight size={40}/>
                                        </div>
                                        <h4 className="text-[14px]">
                                            Imaginer de nouvelles approches ou perspectives
                                        </h4>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <PiNumberCircleThreeLight size={40}/>
                                        </div>
                                        <h4 className="text-[14px]">
                                            Être créatif, curieux et ouvert à l’inconnu
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <PiNumberCircleFourLight size={40}/>
                                        </div>
                                        <h4 className="text-[14px]">
                                            Oser explorer ce que d’autres n’ont pas encore envisagé
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

export default NosP;