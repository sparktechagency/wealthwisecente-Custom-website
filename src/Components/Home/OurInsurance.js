'use client';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const OurInsurance = () => {
    // Sample client data
    const clients = [
        { id: 1, name: 'Client 1', profession: 'Profession 1', description: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.', image: '/path/to/image1.jpg' },
        { id: 2, name: 'Client 2', profession: 'Profession 2', description: 'At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.', image: '/path/to/image2.jpg' },
        { id: 3, name: 'Client 3', profession: 'Profession 3', description: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.', image: '/path/to/image3.jpg' },
        { id: 4, name: 'Client 4', profession: 'Profession 4', description: 'At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.', image: '/path/to/image4.jpg' },
    ];

    // State to track active client index
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to go to the previous slide
    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? clients.length - 1 : prevIndex - 1));
    };

    // Function to go to the next slide
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='lg:px-20 px-5 md:py-20 py-10'>
            <h2 className='lg:text-4xl text-2xl text-[#111111] mb-10 font-semibold text-center leading-[1.3]'>
                What They Say About <br /> Our Insurance
            </h2>

            {/* Slider Container */}
            <div className="relative flex justify-center items-center w-full md:w-3/4 mx-auto">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute cursor-pointer left-5 text-[#dcb66b] bg-gray-900 p-3 rounded-full opacity-70  transition"
                >
                    <FaChevronLeft size={24} />
                </button>

                {/* Slider Content */}
                <div className="w-full md:w-3/4 mx-auto bg-[#fbf8f0] p-8 rounded-xl text-center">
                    <div className="mb-6">
                        {/* Image */}
                        <img
                            src={'/Images/Home/OurProfessionalTeam1.jpg'}
                            className="!w-64 !h-64 object-cover rounded-full mx-auto transition-all duration-300"
                        />
                    </div>

                    {/* Details when active */}
                    <div className={`${activeIndex !== null ? 'block' : 'hidden'}`}>
                        <h3 className="text-xl font-semibold">{clients[activeIndex].name}</h3>
                        <p className="text-gray-600">{clients[activeIndex].profession}</p>
                        <p className="mt-4 text-gray-800">{clients[activeIndex].description}</p>
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute cursor-pointer right-5 text-[#dcb66b] bg-gray-900 p-3 rounded-full opacity-70  transition"
                >
                    <FaChevronRight size={24} />
                </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-5 space-x-3">
                {clients.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-3 w-3 cursor-pointer rounded-full ${index === activeIndex ? 'bg-[#dcb66b]' : 'bg-gray-400'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default OurInsurance;
