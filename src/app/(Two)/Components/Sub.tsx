import React from 'react';
import {LuMail} from "react-icons/lu";

function Sub() {
    return (
        <>
            <section id="sub-section">
                <div className="container pt-16">
                    <div className="wrap">
                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="card_box col image-box p-12 flex flex-col justify-center rounded-xl relative overflow-hidden aos-init aos-animate">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-[#8BCAE8] to-[#EAE9E8] opacity-[79%] z-10"></div>

                            <div className="block md:flex items-start gap-8 z-20">
                                <h4 className="text-[24px] font-semibold text-black">
                                    Rejoignez Nosres Education et participez
                                    à la création de ressources éducatives
                                    innovantes pour tous.
                                </h4>
                                <div className="right_side mt-4 md:mt-0">
                                    <h4 className="text-[16px] leading-5">
                                        Vous souhaitez contribuer, collaborer ou en savoir plus sur
                                        nos actions ?
                                    </h4>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="icon">
                                            <LuMail size={15} className="text-primary"/>
                                        </div>
                                        <h4 className="text-[14px] text-graycolor">education@nosres.com</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sub;