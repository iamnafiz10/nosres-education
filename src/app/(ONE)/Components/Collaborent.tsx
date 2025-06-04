"use client";
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import SliderOne from "../../../../public/assets/images/p-logo.png";
// import required modules
import {Autoplay} from 'swiper/modules';

function Collaborent() {
    return (
        <>
            <section id="collaborent-section" className="bg-[#F4F4F4] mt-8">
                <div className="container py-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Ils collaborent avec nous
                        </h1>
                        <p>
                            Des institutions, des enseignants, des chercheurs et des créateurs engagés nous font<br/>
                            confiance pour imaginer ensemble l’éducation de demain.
                        </p>
                    </div>

                    <div className="slider_wrap mt-6">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={4}
                            loop={true}
                            centeredSlides={true}
                            grabCursor={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
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
                                <div className="cursor-pointer">
                                    <Image src={SliderOne} className="w-[70%] h-full rounded-md rounded-b-none"
                                           alt="SliderOne"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer">
                                    <Image src={SliderOne} className="w-[70%] h-full rounded-md rounded-b-none"
                                           alt="SliderOne"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer">
                                    <Image src={SliderOne} className="w-[70%] h-full rounded-md rounded-b-none"
                                           alt="SliderOne"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer">
                                    <Image src={SliderOne} className="w-[70%] h-full rounded-md rounded-b-none"
                                           alt="SliderOne"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer">
                                    <Image src={SliderOne} className="w-[70%] h-full rounded-md rounded-b-none"
                                           alt="SliderOne"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cursor-pointer">
                                    <Image src={SliderOne} className="w-[70%] h-full rounded-md rounded-b-none"
                                           alt="SliderOne"/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Collaborent;