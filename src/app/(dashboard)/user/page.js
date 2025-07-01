'use client';
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const Page = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const companies = [
        { name: "Shell tech", website: "www.support.com" },
        { name: "Shell tech", website: "www.support.com" },
        { name: "Shell tech", website: "www.support.com" },
        { name: "Shell tech", website: "www.support.com" },
        { name: "Shell tech", website: "www.support.com" },
        { name: "Shell tech", website: "www.support.com" },
        { name: "Shell tech", website: "www.support.com" },
        { name: "Shell tech", website: "www.support.com" },
        { name: "Shell tech", website: "www.support.com" },
        { name: "Shell tech", website: "www.support.com" },
        { name: "Shell tech", website: "www.support.com" },
        { name: "Shell tech", website: "www.support.com" },
    ];

    return (
        <div className="px-5 py-5">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Quote with your.</h1>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder="Name"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="p-2 border border-gray-300 rounded-md"
                    />
                    <IoSearch className='text-2xl absolute top-2 right-3' />
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {companies
                    .filter(company => company.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((company, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out border-2 border-[#dcb66b] flex items-center">
                            <img
                                src="/Images/Home/brands1.png"
                                alt="Shell Logo"
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <div className="">
                                <p className="font-semibold text-2xl mb-2">{company.name}</p>
                                <a
                                    href={`https://${company.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" hover:underline"
                                >
                                    {company.website}
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Page;
