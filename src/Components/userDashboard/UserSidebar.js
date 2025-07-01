'use client';
import { message } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiLogout } from "react-icons/ci";


const UserSidebar = ({ routeList }) => {
    const path = usePathname();

    const handleLogout = () => {
        // Clear user session or token here
        localStorage.removeItem('userToken'); // Example of clearing a token 
        message.success('Logout successful! Redirecting to home page...');
        
        console.log('User logged out successfully! Redirecting to home page...');
    }

    return (
        <div className='max-w-[280px] w-full h-screen flex flex-col items-center user-sidebar'>
            <Link href="/user" className='text-2xl py-10 font-bold text-black'>
                <img className='w-24 rounded-full' src="/Images/dashboard/logo.jpg" alt="Logo" />
            </Link>
            <hr className='w-full h-[2px] border-none outline-none bg-black' />
            {routeList.map((route, index) => {
                // Check if the current route is active by comparing the pathname
                const isActive = path === route.path;

                return (
                    <Link
                        key={index}
                        href={route.path}
                        className={`w-full my-2 p-3 text-lg font-medium transition-all duration-300 ease-in-out flex items-center gap-2 ${isActive ? 'bg-black text-[#dcb66b]' : 'text-black'} hover:rounded-lg`}
                    >
                        {route.icon && <span className='ml-2'>{route.icon}</span>}
                        {route.name}
                    </Link>
                );
            })}
            <button onClick={handleLogout} className='w-full my-2 p-3 text-lg font-medium  transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer gap-2 text-[#dcb66b] mt-20 rounded-lg'>
                Logout <CiLogout className='rotate-180' />
            </button>
        </div>
    );
}

export default UserSidebar;
