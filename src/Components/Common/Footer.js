import React from 'react';
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Brand Section */}
                <div className="space-y-4">
                    <img className='w-40' src="/Images/Auth/logo.jpg" alt="" />
                    <p className="text-gray-400 text-sm">
                        We believe that your home should be a reflection of your style and comfort.
                        That's why we offer a curated selection of furniture that blends quality craftsmanship with timeless design.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-[#dcb66b]">
                            <IoLogoTwitter size={24} />
                        </a>
                        <a href="#" className="text-[#dcb66b]">
                            <IoLogoFacebook size={24} />
                        </a>
                        <a href="#" className="text-[#dcb66b]">
                            <IoLogoInstagram size={24} />
                        </a>
                        <a href="#" className="text-[#dcb66b]">
                            <IoLogoLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Address Section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Address</h2>
                    <p className="text-gray-400">123 Street, New York, USA</p>
                    <p className="text-gray-400">+012 345 67890</p>
                    <p className="text-gray-400">info@example.com</p>
                </div>

                {/* Quick Links Section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-gray-400 hover:text-[#dcb66b]">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-[#dcb66b]">Contact Us</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-[#dcb66b]">Our Services</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-[#dcb66b]">Terms & Condition</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-[#dcb66b]">Support</a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Newsletter</h2>
                    <p className="text-gray-400 text-sm">
                        Dolor amet sit justo amet elit clita ipsum elit est.
                    </p>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 p-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dcb66b] transition"
                        />
                        <button className="bg-[#dcb66b]  p-2 rounded-r-md hover:bg-[#c2a05d] cursor-pointer text-white font-semibold transition">
                            SignUp
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-gray-800 py-4 mt-10">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>&copy; 2025 WealthWise. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
