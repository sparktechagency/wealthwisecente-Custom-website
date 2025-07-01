'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { IoCall } from "react-icons/io5";
import { MdAccessTimeFilled, MdEmail } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { usePathname, useRouter } from 'next/navigation';
import { RxCross1 } from "react-icons/rx";



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const isActiveRoute = usePathname();



    return (
        <div>
            {/* Top Bar with Contact Info */}
            <div className='md:px-20 hidden px-5 py-2 bg-[#000000] text-[#dcb66b] md:flex gap-6 md:gap-10 items-center'>
                <div className='flex items-center gap-2 py-2'>
                    <IoCall className='text-xl' />
                    <span>+1234567890</span>
                </div>
                <div className='flex items-center gap-2 py-2'>
                    <MdEmail className='text-xl' />
                    <span>info@example.com</span>
                </div>
                <div className='flex items-center gap-2 py-2'>
                    <MdAccessTimeFilled className='text-xl' />
                    <span>Mon - Fri : 09 AM - 09 PM</span>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className='md:px-20 px-5 py-4 bg-[#dcb66b38] text-[#000000] flex justify-between items-center'>
                {/* Logo */}
                <Link href="/" className='flex items-center gap-2'>
                    <img className='w-32 md:w-48' src="/Images/Auth/logo.jpg" alt="Logo" />
                </Link>

                {/* Desktop Navigation */}
                <div className='hidden md:flex gap-6 bg-[#000] text-[#ffffff] font-medium py-2 px-5 rounded-md'>
                    <Link href="/" passHref>
                        <span className={`hover:text-[#dcb66b] ${isActiveRoute == '/' ? 'text-[#dcb66b]' : ''}`}>
                            Home
                        </span>
                    </Link>
                    <Link href="/about-us" passHref>
                        <span className={`hover:text-[#dcb66b] ${isActiveRoute == '/about-us' ? 'text-[#dcb66b]' : ''}`}>
                            About Us
                        </span>
                    </Link>
                    <Link href="/our-services" passHref>
                        <span className={`hover:text-[#dcb66b] ${isActiveRoute == '/our-services' ? 'text-[#dcb66b]' : ''}`}>
                            Our Services
                        </span>
                    </Link>
                    <Link href="/contact-us" passHref>
                        <span className={`hover:text-[#dcb66b] ${isActiveRoute == '/contact-us' ? 'text-[#dcb66b]' : ''}`}>
                            Contact Us
                        </span>
                    </Link>
                </div>

                {/* Desktop Login Button */}
                <div className='hidden md:flex gap-4'>
                    <Link href="/login">
                        <span className={`bg-[#000] text-[#dcb66b] py-3 px-8 rounded-md font-semibold hover:bg-[#333] ${isActiveRoute == '/login' ? 'text-[#dcb66b]' : ''}`}>
                            Login
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Icon (Hamburger) */}
                <div className='md:hidden flex items-center'>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#000] focus:outline-none">
                        {
                            !menuOpen ?
                                <IoIosMenu className='text-4xl' />
                                :
                                <RxCross1 className='text-4xl' />
                        }
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#000] text-[#ffffff] border-b-2 border-[#dcb66b] flex flex-col items-center py-4">
                    <Link onClick={() => setMenuOpen(false)} className='mt-3' href="/" passHref>
                        <span className={`py-2 px-6 hover:text-[#dcb66b] ${isActiveRoute == '/' ? 'text-[#dcb66b]' : ''}`}>
                            Home
                        </span>
                    </Link>
                    <Link onClick={() => setMenuOpen(false)} className='mt-3' href="/about-us" passHref>
                        <span className={`py-2 px-6 hover:text-[#dcb66b] ${isActiveRoute == '/about-us' ? 'text-[#dcb66b]' : ''}`}>
                            About Us
                        </span>
                    </Link>
                    <Link onClick={() => setMenuOpen(false)} className='mt-3' href="/our-services" passHref>
                        <span className={`py-2 px-6 hover:text-[#dcb66b] ${isActiveRoute == '/our-services' ? 'text-[#dcb66b]' : ''}`}>
                            Our Services
                        </span>
                    </Link>
                    <Link onClick={() => setMenuOpen(false)} className='mt-3' href="/contact-us" passHref>
                        <span className={`py-2 px-6 hover:text-[#dcb66b] ${isActiveRoute == '/contact-us' ? 'text-[#dcb66b]' : ''}`}>
                            Contact Us
                        </span>
                    </Link>
                    <Link onClick={() => setMenuOpen(false)} className='my-5' href="/login" passHref>
                        <span className={`py-2 px-6 bg-[#1b1b1b] text-[#dcb66b] rounded-md font-semibold ${isActiveRoute == '/login' ? 'text-[#dcb66b]' : ''}`}>
                            Login
                        </span>
                    </Link>
                </div>
            )
            }
        </div >
    );
}

export default Header;