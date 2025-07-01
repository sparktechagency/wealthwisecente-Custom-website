import ProvideProfessional from '@/Components/Common/ProvideProfessional';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div>
            <div className='bg-[url("/Images/Common/headerBg.jpg")] bg-cover bg-center h-[200px] md:h-[300px] '>
                <div className='lg:px-20 px-5 py-10'>
                    <h1 className='text-black lg:text-5xl text-3xl font-bold'>Our Services</h1>
                    <p className=' mt-2'><Link href="/">Home</Link> / Pages / <span className='text-[#dcb66b]'> Services</span></p>
                </div>
            </div>
            <ProvideProfessional />
        </div>
    );
}

export default Page;
