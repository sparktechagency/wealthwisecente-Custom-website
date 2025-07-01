import React from 'react';

const AccessCarriers = () => {
    return (
        <div className='lg:px-20 px-5 py-10'>
            <div className='lg:w-1/2 mx-auto text-center'>
                <h2 className='lg:text-4xl text-2xl text-[#111111] font-semibold text-center leading-[1.3]'>Fast Carrier Access and <br />
                    Management for Independent <br />
                    <span className='text-[#dcb66b]'>Agents</span></h2>
                <p className='my-3 text-gray-700'>Wealth wise insurance solutions isn’t just another insurance aggregator. It’s an all-in-one insurtech
                    platform that gives independent agents the tools they need to help grow their agencies
                    and write the coverage their clients need.</p>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-14 gap-10 mt-10'>
                <div className='bg-gradient-to-tl from-[#0f5867] rounded-2xl to-[#131313] text-white lg:px-10 px-5 lg:py-32 py-10 flex items-center gap-10'>
                    <div >
                        <h2 className='lg:text-2xl text-xl  font-semibold'>Access to <span className='text-[#dcb66b]'>12+ Carriers</span></h2>
                        <p className='text-[#dcb66b] my-5'>Only writing with a handful of carriers?
                            Not if we can help it</p>
                        <span>With our convenient Carrier Store, you can request and manage carrier access
                            from over 120 carriers across home, auto, commercial, and life from a single, easy-
                            to-use platform.</span>
                    </div>
                </div>
                <div>
                    <img src="/Images/Home/multiple.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default AccessCarriers;
