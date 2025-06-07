import React from 'react';
import {LuBookOpenText, LuEarth, LuLightbulb, LuPuzzle, LuTelescope} from "react-icons/lu";

function Dco() {
    return (
        <>
            <section id="dco-section">
                <div className="container pt-16">
                    <div className="wrap">
                        <h4 className="text-[24px] font-semibold">
                            Découvrir, explorer, s’éveiller
                        </h4>
                        <p className="text-[16px] mt-2">
                            Chez Nosres Education, nous croyons que les premières années sont essentielles pour
                            construire
                            les<br/>
                            bases de l’apprentissage et de l’épanouissement personnel. Nos ressources pour la maternelle
                            sont<br/>
                            conçues pour accompagner les enfants dans leur développement global, tout en respectant leur
                            rythme et<br/>
                            leur curiosité naturelle.
                        </p>
                    </div>

                    <div className="wrap mt-8">
                        <h4 className="text-[24px] font-semibold">
                            Ce que nous proposons
                        </h4>
                        <p className="text-[16px] mt-2">
                            Nous explorons les liens entre créativité, résolution de problèmes et innovation
                            pédagogique. Notre travail<br/>
                            repose sur une approche intégrée du développement de l’enfant, dès la maternelle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <div className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-center gap-1">
                                <div className="icon">
                                    <LuLightbulb size={25} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black">
                                    Imagination et créativité
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-center text-prgcolor">
                                Des livres, fiches et ateliers pour encourager
                                le jeu symbolique, l’expression artistique et la
                                narration, dès le plus jeune âge. L’enfant crée,
                                imagine et développe sa pensée divergente.
                            </p>
                        </div>

                        <div className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-center gap-1">
                                <div className="icon">
                                    <LuEarth size={20} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black">
                                    Langage et communication
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-prgcolor text-center">
                                Des outils concrets pour enrichir le vocabulaire, structurer le langage oral, et poser
                                les
                                premières bases de la lecture. L’accent est
                                mis sur l’interaction, l’écoute active et le plaisir de communiquer.
                            </p>
                        </div>

                        <div className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-center gap-1">
                                <div className="icon">
                                    <LuBookOpenText size={20} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black">
                                    Méthode de lecture et d’écriture
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-prgcolor text-center">
                                Nous développons une méthode syllabique
                                progressive et bien structurée, adaptée aux
                                enfants dès la grande section, pour faciliter
                                l’entrée dans l’écrit.
                            </p>
                        </div>

                        <div className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-center gap-1">
                                <div className="icon">
                                    <LuTelescope size={20} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black">
                                    Motricité fine et globale
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-prgcolor text-center">
                                Des activités motrices et sensorielles pour
                                explorer le monde avec le corps, développer
                                la coordination, la confiance en soi, et la
                                capacité à résoudre des problèmes concrets
                                en situation.
                            </p>
                        </div>

                        <div className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-center gap-1">
                                <div className="icon">
                                    <LuTelescope size={20} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black">
                                    Observation et découverte
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-prgcolor text-center">
                                Des approches ludiques autour de la nature,
                                des objets du quotidien et des relations
                                sociales, pour éveiller la curiosité, l’esprit
                                scientifique et la capacité à poser des
                                hypothèses.
                            </p>
                        </div>

                        <div className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-center gap-2">
                                <div className="icon">
                                    <LuPuzzle size={20} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black">
                                    Résolution de problèmes<br/>
                                    & pensée critique
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-prgcolor text-center">
                                Nous concevons des situations d’apprentissage
                                qui stimulent la logique, le raisonnement, la
                                prise d’initiative et la coopération, en
                                encourageant les enfants à expérimenter,
                                raisonner et apprendre par eux-mêmes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Dco;