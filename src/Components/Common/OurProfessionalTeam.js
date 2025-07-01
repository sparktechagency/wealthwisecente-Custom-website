import React from 'react';

const OurProfessionalTeam = () => {
    return (
        <div className='lg:px-20 px-5 md:py-20 py-10'>
            <h2 className='lg:text-4xl text-2xl text-[#111111] mb-10 font-semibold text-center leading-[1.3]'>Meet Our Professional <br />Team Members </h2>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    [...Array(4).keys()].map((item, index) => (
                        <div className='border-2 border-[#dcb66b] rounded-2xl shadow-lg '>
                            <img className='w-full   rounded-t-2xl' src="/Images/Home/OurProfessionalTeam1.jpg" alt="" />
                            <div className='bg-white p-5 rounded-b-2xl text-center'>
                                <h3 className='text-xl text-[#111111] font-semibold mt-5'>John Doe</h3>
                                <p className='text-[#666] mt-2'>Senior Developer</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default OurProfessionalTeam;
