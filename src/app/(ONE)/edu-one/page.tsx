import React from 'react';
import Hero from "@/app/(ONE)/Components/Hero";
import Rendre from "@/app/(ONE)/Components/Rendre";
import Parcours from "@/app/(ONE)/Components/Parcours";
import Offrir from "@/app/(ONE)/Components/Offrir";
import Notre from "@/app/(ONE)/Components/Notre";

function Page() {
    return (
        <>
            <Hero/>
            <Rendre/>
            <Offrir/>
            <Notre/>
            <Parcours/>
        </>
    );
}

export default Page;