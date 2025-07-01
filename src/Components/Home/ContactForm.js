import React from 'react';

const ContactForm = () => {
    return (
        <div className='lg:px-20 px-5 md:py-20 py-10 bg-[#dbb56a] grid lg:grid-cols-2 grid-cols-1 items-start gap-10 '>
            <div>
                <h2 className='lg:text-4xl text-2xl text-[#ffffff] font-semibold'>We're Award Winning Insurance Company </h2>
                <p className='my-5 text-[#f1f1f1]'>We believe that your home should be a reflection of your style and comfort. That's why we offer a curated selection of furniture that blends quality craftsmanship with timeless design. Whether you're looking to refresh your living room, create a cozy bedroom retreat, or find the perfect dining set, we have everything you need to bring your vision to life.We believe that your home should be a </p>
                <div className='bg-[#fff] p-5 w-2/3 rounded-lg '>
                    <div className='flex items-center flex-wrap gap-5 bg-[#000000] p-5 rounded-lg'>
                        <img className='!w-14 !h-14 rounded-full' src="/Images/Home/ContactForm.png" alt="" />
                        <h3 className='text-[#ffffff] text-xl'>Call Us: +012 345 6789</h3>
                    </div>
                </div>
            </div>
            <div className='bg-[#ffffff] p-10 rounded-lg'>
                <form action="">
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5'>
                        <input placeholder='Your Name' className='border border-[#dcb66b] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#dcb66b]  w-full text-[#dcb66b] placeholder:text-[#dcb66b]' type="text" />
                        <input placeholder='Your Email' className='border border-[#dcb66b] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#dcb66b]  w-full text-[#dcb66b] placeholder:text-[#dcb66b]' type="text" />
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5'>
                        <input placeholder='Your Mobile' className='border border-[#dcb66b] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#dcb66b]  w-full text-[#dcb66b] placeholder:text-[#dcb66b]' type="text" />
                        <input placeholder='Your Services' className='border border-[#dcb66b] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#dcb66b] w-full text-[#dcb66b] placeholder:text-[#dcb66b]' type="text" />
                    </div>
                    <div>
                        <textarea className='border border-[#dcb66b] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#dcb66b] w-full text-[#dcb66b] placeholder:text-[#dcb66b]' placeholder='Message' name="Message" rows={6} id=""></textarea>
                    </div>
                    <div>
                        <button className='w-full cursor-pointer bg-[#000] text-[#dcb66b] font-semibold py-3 rounded-md mt-4 hover:bg-[#333] transition duration-300'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
