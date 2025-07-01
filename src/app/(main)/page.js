
import Expriences from '@/Components/Common/Expriences';
import OurProfessionalTeam from '@/Components/Common/OurProfessionalTeam';
import ProvideProfessional from '@/Components/Common/ProvideProfessional';
import AboutUs from '@/Components/Home/AboutUs';
import AccessCarriers from '@/Components/Home/AccessCarriers';
import Brands from '@/Components/Home/Brands';
import ContactForm from '@/Components/Home/ContactForm';
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
            <ContactForm />
            <OurProfessionalTeam />
        </div>
    );
}

export default Page;
