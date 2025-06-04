"use client";
import React from 'react';
import {IoIosArrowForward} from "react-icons/io";
import Image from "next/image";
import SliderOne from "../../../../public/assets/images/slider1.jpg";
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';

function Parcours() {
    return (
        <>
            <section id="parcours-section" className="bg-[#F4F4F4] mt-8">
                <div className="container pt-16">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Un parcours éducatif complet
                        </h1>
                        <p>
                            De l’éveil en maternelle aux compétences du supérieur, notre approche place l’apprenant<br/>
                            au cœur d’un apprentissage actif, inclusif et créatif.
                        </p>
                    </div>
                    <div className="slider_wrap mt-6">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={3}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation={true}
                            pagination={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="cursor-pointer image-box bg-white rounded-md">
                                    <Image src={SliderOne} className="w-full h-52 rounded-md rounded-b-none"
                                           alt="SliderOne"/>
                                    <div className="content px-4 py-4">
                                        <h3 className="font-semibold text-[16px]">
                                            Maternelle
                                        </h3>
                                        <p className="mt-1 text-[14px] text-gray-600">
                                            Découvrir, explorer, s’éveiller.
                                        </p>
                                        <h4 className="text-[14px] mt-2">
                                            Nous proposons des ressources qui
                                            stimulent l’imagination, le langage, la
                                            motricité et la curiosité naturelle des plus
                                            petits. L’accent est mis sur le jeu,
                                            l’observation et la découverte.
                                        </h4>
                                        <button type='button'
                                                className="mt-2 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:text-black">
                                            En savoir plus
                                            <span className="icon">
                                                <IoIosArrowForward size={15}/>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer image-box bg-white rounded-md">
                                    <Image src={SliderOne} className="w-full h-52 rounded-md rounded-b-none"
                                           alt="SliderOne"/>
                                    <div className="content px-4 py-4">
                                        <h3 className="font-semibold text-[16px]">
                                            Primaire <span className="text-gray-400">(à venir)</span>
                                        </h3>
                                        <p className="mt-1 text-[14px] text-gray-600">
                                            Apprendre les bases, comprendre le monde.
                                        </p>
                                        <h4 className="text-[14px] mt-2">
                                            Nos contenus pour le primaire aident les
                                            enfants à construire des savoirs
                                            fondamentaux (lecture, écriture,
                                            mathématiques, sciences…) tout en
                                            développant leur pensée critique, leur
                                            confiance et leur créativité.
                                        </h4>
                                        <button type='button'
                                                className="mt-2 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:text-black">
                                            En savoir plus
                                            <span className="icon">
                                                <IoIosArrowForward size={15}/>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer image-box bg-white rounded-md">
                                    <Image src={SliderOne} className="w-full h-52 rounded-md rounded-b-none"
                                           alt="SliderOne"/>
                                    <div className="content px-4 py-4">
                                        <h3 className="font-semibold text-[16px]">
                                            Secondaire <span className="text-gray-400">(à venir)</span>
                                        </h3>
                                        <p className="mt-1 text-[14px] text-gray-600">
                                            Approfondir, relier, s’affirmer.
                                        </p>
                                        <h4 className="text-[14px] mt-2">
                                            Nous accompagnons les élèves du collège
                                            et du lycée dans leur réflexion, leur
                                            autonomie, et leur capacité à résoudre des
                                            problèmes complexes. Nos outils favorisent
                                            une approche interdisciplinaire, moderne et
                                            ancrée dans les enjeux du monde actuel.
                                        </h4>
                                        <button type='button'
                                                className="mt-2 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:text-black">
                                            En savoir plus
                                            <span className="icon">
                                                <IoIosArrowForward size={15}/>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer image-box bg-white rounded-md">
                                    <Image src={SliderOne} className="w-full h-52 rounded-md rounded-b-none"
                                           alt="SliderOne"/>
                                    <div className="content px-4 py-4">
                                        <h3 className="font-semibold text-[16px]">
                                            Supérieur <span className="text-gray-400">(à venir)</span>
                                        </h3>
                                        <p className="mt-1 text-[14px] text-gray-600">
                                            Analyser, innover, construire l’avenir.
                                        </p>
                                        <h4 className="text-[14px] mt-2">
                                            Nos ressources pour l’enseignement
                                            supérieur encouragent la pensée critique,
                                            l’autonomie intellectuelle et la capacité à
                                            relier les savoirs à la pratique. Elles
                                            s’adressent aux étudiants, enseignants et
                                            formateurs engagés dans une société en
                                            transformation.
                                        </h4>
                                        <button type='button'
                                                className="mt-2 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:text-black">
                                            En savoir plus
                                            <span className="icon">
                                                <IoIosArrowForward size={15}/>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Parcours;