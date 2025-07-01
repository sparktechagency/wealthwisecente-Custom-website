'use client';

import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';

const UserHeader = () => {

    const [show, setShow] = React.useState(false);

    // Toggles the profile options visibility
    const handleShow = () => {
        setShow(!show); // Toggle the show state
    };

    // Close the profile options if clicked outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.profile-options') || event.target.closest('.user-header')) return;
            setShow(false);
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className='bg-black relative text-white p-5 flex justify-end items-center user-header'>
            <div className='flex items-center gap-3'>
                <span className='h-12 w-12 bg-[#dcb66b] rounded-lg cursor-pointer flex justify-center items-center'>
                    <IoNotifications className='text-2xl' />
                </span>
                <div onClick={handleShow} className='flex items-center gap-3 border-2 py-2 px-8 border-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out'>
                    <img className='w-8 h-8 rounded-full' src="/Images/Home/OurProfessionalTeam1.jpg" alt="User" />
                    <span>John Doe</span>
                    {
                        !show ? (
                            <FaChevronDown className='text-2xl' />
                        ) : (
                            <FaChevronDown className='text-2xl rotate-180' />
                        )
                    }
                </div>

                {/* Conditionally show the profile options */}
                {show && (
                    <div className='profile-options absolute top-20 bg-black right-5  flex flex-col gap-3 border-2 p-2  border-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out'>
                        <button className='border-2 py-2 px-14 border-white rounded-lg cursor-pointer'>Profile</button>
                        <button className='border-2 py-2 px-14 border-white rounded-lg cursor-pointer'>Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserHeader;
