import React from 'react';

const ProvideProfessional = () => {
    return (
        <div className='lg:px-20 px-5 py-10'>
            <h2 className='lg:text-4xl text-2xl text-[#111111] mb-10 font-semibold text-center leading-[1.3]'>We Provide professional <br />
                Insurance Services</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 lg:gap-10'>
                {[...Array(6)].map((_, index) => (
                    <div className='border border-[#dcb66b] rounded-lg shadow-lg' >
                        <div className='flex items-center gap-5 my-3'>
                            <img className='w-20' src="/Images/Home/Provideprofessional.png" alt="" />
                            <h2 className='lg:text-2xl text-xl text-[#111111] font-semibold'>Life Insurance</h2>
                        </div>
                        <div className='p-5'>
                            <p>We believe that your home should be a reflection of your style and comfort. That's why we offer a curated selection of furniture that blends quality craftsmanship with timeless design. Whether you're looking to refresh your living room, create a cozy bedroom retreat, or find the perfect dining set, we have everything you need to bring your vision to life.We believe that your home should be a reflection of your style and comfort. That's why we offer a curated selection of furniture that blends quality craftsmanship with timeless design. Whether you're looking to refresh your living room, create a cozy bedroom retreat, or find the perfect dining set, we have everything you need to bring your vision to life.</p>
                            <button className='bg-[#000000] text-[#dcb66b] font-semibold py-3 px-6 rounded-md mt-4 hover:bg-[#333] transition duration-300 cursor-pointer'>See All</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProvideProfessional;
