import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-[#ffffff]'>
            <div className='grid lg:grid-cols-2 gap-5 items-center bg-[#fbf8f0] w-11/12 sm:w-1/2 mx-auto rounded-xl border-2 shadow-lg'>
                <form className='p-8' action="">
                    <img className='w-20 mb-6' src="/Images/Auth/lion.png" alt="Logo" />
                    <h2 className='text-3xl font-semibold my-3'>Sign In Here</h2>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id='email'
                            className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#dcb66b]'
                            placeholder='Enter your email'
                            required
                        />
                    </div>
                    {/* Password */}
                    <div className='flex flex-col gap-2 mt-4'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id='password'
                            className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#dcb66b]'
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                    {/* Remember me and Forgot password */}
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='remember' />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <Link href="/forgot-password" className='font-semibold text-[#000] hover:underline '>Forgot Password?</Link>
                    </div>
                    <button className='w-full cursor-pointer bg-[#000] text-[#dcb66b] font-semibold py-3 rounded-md mt-4 hover:bg-[#333] transition duration-300'>Login</button>
                    <p className='text-center mt-4 text-sm text-gray-500'>Don't have an account? <Link href="/signup" className='font-semibold text-[#000] hover:underline'>Sign Up</Link></p>
                </form>
                {/* Right side image */}
                <div className='lg:block hidden'>
                    <img className='h-full w-full object-cover rounded-r-xl' src="/Images/Auth/login.png" alt="Login Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Page;
