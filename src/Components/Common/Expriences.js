import React from 'react';
import { IoCall } from 'react-icons/io5';

const Expriences = () => {
    return (
        <div className='md:px-20 px-5 grid md:grid-cols-2 gap-20 md:py-20 py-10 items-center'>
            <div>
                <img src="/Images/Home/expriences.png" alt="" />
            </div>
            <div>
                <h2 className='md:text-4xl text-2xl text-[#111111] font-semibold'>We're Here To Assist You With Exploring Protection</h2>
                <p className='text-gray-700 my-5'>we understand how important it is to feel secure. Our team is dedicated to helping you explore the best protection options tailored to your needs. Whether you're looking for personal, home, or business protection,</p>
                <div className='flex items-center gap-5 flex-wrap'>
                    <div className='flex items-center gap-3 mb-5'>
                        <img className='w-12' src="/Images/Home/Frame.png" alt="" />
                        <h2 className='md:text-2xl text-xl text-[#111111] font-semibold'>Flexible insurance plan</h2>
                    </div>
                    <div className='flex items-center gap-3 mb-5'>
                        <img className='w-12' src="/Images/Home/Frame.png" alt="" />
                        <h2 className='md:text-2xl text-xl text-[#111111] font-semibold'>Money Back Guarantee</h2>
                    </div>
                </div>
                <hr className='my-5 h-[2px] border-none outline-none bg-gray-200' />
                <div className='flex items-center gap-5'>
                    <div className='h-10 w-10 bg-[#000000] flex items-center justify-center rounded-full'>
                        <IoCall className='text-2xl text-[#dcb66b]' />
                    </div>
                    <h2 className=' text-xl text-[#111111] font-semibold'>Call Us: 143434</h2>
                </div>
            </div>
        </div>
    );
}

export default Expriences;
