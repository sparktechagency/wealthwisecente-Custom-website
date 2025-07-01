
import Expriences from '@/Components/Common/Expriences';
import ProvideProfessional from '@/Components/Common/ProvideProfessional';
import AboutUs from '@/Components/Home/AboutUs';
import AccessCarriers from '@/Components/Home/AccessCarriers';
import Brands from '@/Components/Home/Brands';
import Hero from '@/Components/Home/Hero';
import Organizations from '@/Components/Home/Organizations';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Hero />
            <Brands />
            <Expriences />
            <AccessCarriers />
            <AboutUs />
            <Organizations />
            <ProvideProfessional />

        </div>
    );
}

export default Page;
