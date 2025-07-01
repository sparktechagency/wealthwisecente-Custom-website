'use client';

import Link from 'next/link';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';
import { IoNotifications } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';

const UserHeader = ({ routeList }) => {

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


    const [showSidebar, setShowSidebar] = React.useState(false);
    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar); // Toggle the sidebar visibility
    }

    return (
        <div className='bg-black relative text-white p-5 flex justify-end items-center user-header'>
            <div onClick={handleShowSidebar} className='md:hidden absolute left-5 gap-3 cursor-pointer' >
                <IoIosMenu className='text-4xl text-white' />
            </div>
            <div className='flex items-center gap-3'>
                <Link href="/user/notifications" className='h-12 w-12 bg-[#dcb66b] rounded-lg cursor-pointer flex justify-center items-center'>
                    <IoNotifications className='text-2xl' />
                </Link>
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
                    <div className='profile-options absolute z-[100] top-20 bg-black right-5  flex flex-col gap-3 border-2 p-2  border-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out'>
                        <Link href="/user/profile" className='border-2 py-2 px-14 border-white rounded-lg cursor-pointer'>Profile</Link>
                        <button className='border-2 py-2 px-14 border-white rounded-lg cursor-pointer'>Logout</button>
                    </div>
                )}
            </div>

            {
                showSidebar && (
                    <div className='absolute top-0 left-0 h-screen bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center'>
                        <div className='absolute top-5 left-5 cursor-pointer' onClick={handleShowSidebar}>
                            <RxCross1 className='text-3xl text-white' />
                        </div>
                        {routeList.map((route, index) => (
                            <Link
                                onClick={handleShowSidebar}
                                key={index}
                                href={route.path}
                                className={`w-full my-2 p-3 text-lg font-medium transition-all duration-300 ease-in-out flex items-center gap-2 ${route.active ? 'bg-black text-[#dcb66b]' : 'text-white'} hover:rounded-lg`}
                            >
                                {route.icon && <span className='ml-2'>{route.icon}</span>}
                                {route.name}
                            </Link>
                        ))}
                    </div>
                )
            }

        </div>
    );
};

export default UserHeader;
