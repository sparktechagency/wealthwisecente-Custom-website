import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-[#ffffff]'>
            <div className='grid lg:grid-cols-2 gap-5 items-center bg-[#fbf8f0] w-11/12 sm:w-1/2 mx-auto rounded-xl border-2 shadow-lg'>
                <form className='p-8' action="">
                    <img className='w-20 mb-6' src="/Images/Auth/lion.png" alt="Logo" />
                    <h2 className='text-3xl font-semibold my-3 '>Create an Account</h2>

                    {/* User Name */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="username">User Name</label>
                        <input 
                            type="text" 
                            id="username" 
                            className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#dcb66b]' 
                            placeholder='Enter Name' 
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className='flex flex-col gap-2 mt-4'>
                        <label htmlFor="email">Your Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#dcb66b]' 
                            placeholder='Enter Email' 
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className='flex flex-col gap-2 mt-4'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#dcb66b]' 
                            placeholder='Enter Password' 
                            required
                        />
                    </div>

                    {/* Terms and Privacy Policy Checkbox */}
                    <div className='flex items-center gap-2 mt-4'>
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms" className='text-sm'>
                            I accept the <span className='font-semibold text-[#000] hover:underline'>Terms of Service</span> and <span className='font-semibold text-[#000] hover:underline'>Privacy Policy</span>.
                        </label>
                    </div>

                    {/* Sign Up Button */}
                    <button className='w-full cursor-pointer bg-[#000] text-[#dcb66b] font-semibold py-3 rounded-md mt-4 hover:bg-[#333] transition duration-300'>
                        Sign up
                    </button>

                    {/* Sign In Link */}
                    <p className='text-center mt-4 text-sm text-gray-500'>
                        Already have an account? <Link href="/login" className='font-semibold text-[#000] hover:underline'>Sign In</Link>
                    </p>
                </form>
                {/* Right side image (if any) */}
                <div className='lg:block hidden'>
                    <img className='h-full w-full object-cover rounded-r-xl' src="/Images/Auth/register.png" alt="Signup Illustration" />
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
