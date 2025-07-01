import Expriences from '@/Components/Common/Expriences';
import OurProfessionalTeam from '@/Components/Common/OurProfessionalTeam';
import Organizations from '@/Components/Home/Organizations';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div>
            <div className='bg-[url("/Images/Common/headerBg.jpg")] bg-cover bg-center h-[300px] '>
                <div className='lg:px-20 px-5 py-10'>
                    <h1 className='text-black lg:text-5xl text-3xl font-bold'>About Us</h1>
                    <p className=' mt-2'><Link href="/">Home</Link> / Pages / <span className='text-[#dcb66b]'> About</span></p>
                </div>
            </div>
            <Expriences />
            <Organizations />
            <OurProfessionalTeam />
        </div>
    );
}

export default Page;
