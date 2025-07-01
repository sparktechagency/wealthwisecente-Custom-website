import React from 'react';

const AboutUs = () => {
    return (
        <div className='bg-[#fbf8f3] rounded-t-[100px] grid lg:grid-cols-2 items-center lg:gap-14 gap-10 py-10 lg:px-20 px-5'>
            <div>
                <img className='rounded-tl-3xl rounded-br-3xl rounded-tr-[100px] rounded-bl-[100px]' src="/Images/Home/aboutusSection.jpg" alt="" />
            </div>
            <div>
                <h2 className='lg:text-4xl text-2xl text-[#111111] font-semibold'>A b o u t _ U s</h2>
                <p className='my-3 text-gray-700'>We believe that your home should be a reflection of your style and comfort. That's why we offer a curated selection of furniture that blends quality craftsmanship with timeless design. Whether you're looking to refresh your living room, create a cozy bedroom retreat, or find the perfect dining set, we have everything you need to bring your vision to life.We believe that your home should be a reflection of your style and comfort. That's why we offer a curated selection of furniture that blends quality craftsmanship with timeless design. Whether you're looking to refresh your living room, create a cozy bedroom retreat, or find the perfect dining set, we have everything you need to bring your vision to life.</p>
                <button className='bg-[#000000] text-[#dcb66b] font-semibold py-3 px-6 rounded-md mt-4 hover:bg-[#333] transition duration-300 cursor-pointer'>See all</button>
            </div>
        </div>
    );
}

export default AboutUs;
