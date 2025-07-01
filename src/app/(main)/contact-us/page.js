import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div>
            {/* Header Section */}
            <div className='bg-[url("/Images/Common/headerBg.jpg")] bg-cover bg-center h-[200px] md:h-[300px] '>
                <div className='lg:px-20 px-5 py-10'>
                    <h1 className='text-black lg:text-5xl text-3xl font-bold'>Contact Us</h1>
                    <p className='mt-2'>
                        <Link href="/">Home</Link> / Pages / <span className='text-[#dcb66b]'>Contact</span>
                    </p>
                </div>
            </div>

            {/* Main Contact Section */}
            <div className='lg:px-20 px-5 lg:py-20 bg-[#fbf8f0] py-10 my-10 '>
                <div className='grid lg:grid-cols-2 gap-10 lg:w-3/4 mx-auto'>
                    {/* Left Section: Contact Form */}
                    <div>
                        <h2 className='text-3xl font-semibold mb-4'>If You Have Any Query, Please Contact Us</h2>
                        <p className='text-gray-600 mb-6'>
                            The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes.
                            Just copy and paste the files, add a little code and you're done.
                        </p>
                        <form className='space-y-4'>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#dcb66b]'
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#dcb66b]'
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#dcb66b]'
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message"
                                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#dcb66b]'
                                    rows="5"
                                />
                            </div>
                            <div>
                                <button className='w-full cursor-pointer py-3 bg-[#dcb66b] text-white rounded-md hover:bg-[#d8b34c] transition'>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Section: Google Map */}
                    <div>
                        <h2 className='text-3xl font-semibold mb-4'>Our Location</h2>
                        <div className='h-[400px]'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.21020213452!2d-74.7445500464975!3d40.71272821853223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24a05f2f4019f%3A0x45d20a0bc7642e3b!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1647841504569!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="mt-4 text-center">
                            <Link
                                href="https://www.google.com/maps?q=New+York,+USA&output=embed"
                                className="text-[#dcb66b] text-sm"
                                target="_blank"
                            >
                                View Larger Map
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
