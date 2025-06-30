import React from 'react';

const Hero = () => {
    return (
        <div className='bg-[#000000] grid md:grid-cols-2 justify-between items-center  gap-10'>
            <div className='md:px-20 px-3 md:py-0 py-10 '>
                <h3 className='md:text-6xl text-4xl text-[#dcb66b] font-semibold'>Protect What Matters Most with Our Trusted Insurance Plans.</h3>
                <p className='  text-white mt-4'>At wealth wise, we understand that life is unpredictable, but your insurance doesn’t have to be. Our AI-powered platform offers personalized, fast, and reliable insurance coverage tailored to meet your unique needs.</p>
            </div>
            <div>
                <img src="/Images/Home/heroBanner.png" alt="" />
            </div>
        </div>
    );
}

export default Hero;
