"use client";
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import SliderOne from "../../../../public/assets/images/slider2.jpg";
import {IoIosArrowForward} from "react-icons/io";

function Nos() {
    return (
        <>
            <section id="nos-section">
                <div className="container pt-16">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Nos projets en cours
                        </h1>
                    </div>

                    <div className="slider_wrap mt-6">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={4}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
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
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="cursor-pointer border border-bordercolor image-box bg-white rounded-xl">
                                    <Image src={SliderOne} className="w-full h-44 rounded-xl rounded-b-none"
                                           alt="SliderOne"/>
                                    <div className="content px-4 py-4">
                                        <h3 className="font-semibold text-[16px]">
                                            Lire le monde
                                        </h3>
                                        <h4 className="text-[14px] mt-2">
                                            Une collection de livres jeunesse
                                            qui invite les enfants à explorer
                                            les enjeux sociaux contemporains
                                            avec curiosité et empathie.
                                        </h4>
                                        <button type='button'
                                                className="mt-2 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:text-primary hover:underline">
                                            En savoir plus
                                            <span className="icon">
                                                <IoIosArrowForward size={15}/>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer border border-bordercolor image-box bg-white rounded-xl">
                                    <Image src={SliderOne} className="w-full h-44 rounded-xl rounded-b-none"
                                           alt="SliderOne"/>
                                    <div className="content px-4 py-4">
                                        <h3 className="font-semibold text-[16px]">
                                            Kit pédagogique libre
                                        </h3>
                                        <h4 className="text-[14px] mt-2">
                                            Un ensemble de ressources
                                            gratuites et modulables conçu
                                            pour les écoles primaires rurales,
                                            favorisant l’autonomie des
                                            enseignants.
                                        </h4>
                                        <button type='button'
                                                className="mt-2 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:text-primary hover:underline">
                                            En savoir plus
                                            <span className="icon">
                                                <IoIosArrowForward size={15}/>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer border border-bordercolor image-box bg-white rounded-xl">
                                    <Image src={SliderOne} className="w-full h-44 rounded-xl rounded-b-none"
                                           alt="SliderOne"/>
                                    <div className="content px-4 py-4">
                                        <h3 className="font-semibold text-[16px]">
                                            Formations enseignants
                                        </h3>
                                        <h4 className="text-[14px] mt-2">
                                            Des ateliers pratiques sur la
                                            pédagogie par projet, pour
                                            encourager la créativité, la
                                            collaboration et l’apprentissage
                                            actif en classe.
                                        </h4>
                                        <button type='button'
                                                className="mt-2 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:text-primary hover:underline">
                                            En savoir plus
                                            <span className="icon">
                                                <IoIosArrowForward size={15}/>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer border border-bordercolor image-box bg-white rounded-xl">
                                    <Image src={SliderOne} className="w-full h-44 rounded-xl rounded-b-none"
                                           alt="SliderOne"/>
                                    <div className="content px-4 py-4">
                                        <h3 className="font-semibold text-[16px]">
                                            Recherche-action
                                        </h3>
                                        <h4 className="text-[14px] mt-2">
                                            Une étude de terrain
                                            participative sur l’éducation
                                            inclusive dans les zones
                                            sensibles, menée avec des
                                            acteurs locaux et des
                                            En savoir plus {`>`} chercheurs.
                                        </h4>
                                        <button type='button'
                                                className="mt-2 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:text-primary hover:underline">
                                            En savoir plus
                                            <span className="icon">
                                                <IoIosArrowForward size={15}/>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer border border-bordercolor image-box bg-white rounded-xl">
                                    <Image src={SliderOne} className="w-full h-44 rounded-xl rounded-b-none"
                                           alt="SliderOne"/>
                                    <div className="content px-4 py-4">
                                        <h3 className="font-semibold text-[16px]">
                                            Lire le monde
                                        </h3>
                                        <h4 className="text-[14px] mt-2">
                                            Une collection de livres jeunesse
                                            qui invite les enfants à explorer
                                            les enjeux sociaux contemporains
                                            avec curiosité et empathie.
                                        </h4>
                                        <button type='button'
                                                className="mt-2 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:text-primary hover:underline">
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

export default Nos;