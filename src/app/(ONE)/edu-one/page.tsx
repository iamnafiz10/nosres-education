import React from 'react';
import Hero from "@/app/(ONE)/Components/Hero";
import Rendre from "@/app/(ONE)/Components/Rendre";
import Parcours from "@/app/(ONE)/Components/Parcours";
import Offrir from "@/app/(ONE)/Components/Offrir";
import Notre from "@/app/(ONE)/Components/Notre";
import Nos from "@/app/(ONE)/Components/Nos";
import Collaborent from "@/app/(ONE)/Components/Collaborent";

function Page() {
    return (
        <>
            <Hero/>
            <Rendre/>
            <Offrir/>
            <Notre/>
            <Parcours/>
            <Nos/>
            <Collaborent/>
        </>
    );
}

export default Page;