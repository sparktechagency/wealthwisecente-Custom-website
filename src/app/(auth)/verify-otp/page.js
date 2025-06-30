'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import OTPInput from 'react-otp-input';

const Page = () => {
    const [otp, setOtp] = useState('');
    console.log(otp);

    return (
        <div className='h-screen bg-[#ffffff] flex items-center justify-center'>
           
            <div className='flex justify-center  mt-20'>
                <div className='w-full flex items-center sm:w-80 md:w-96 bg-[#fbf8f0] p-8 rounded-l-xl shadow-lg'>
                    <div>
                        <img className='w-20' src="/Images/Auth/lion.png" alt="" />
                        <h2 className='text-3xl font-medium  text-gray-800 my-3'>Verify OTP</h2>
                        <p className=' mt-5 text-gray-600'>Please enter the OTP sent to your email.</p>

                        <div className='mt-5'>
                            <label className='font-semibold' htmlFor="otp">Enter OTP</label>
                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                containerStyle={{ justifyContent: 'space-between' }}
                                renderInput={(props) => (
                                    <input
                                        {...props}
                                        className="!border bg-gray-200 border-[#dcb66b] rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#dcb66b]"
                                        style={{ width: '50px', marginRight: '5px', height: '50px', textAlign: 'center' }}
                                    />
                                )}
                            />
                        </div>

                        <Link href="/update-password" className='mt-5 block'>
                            <button className='cursor-pointer w-full p-3 bg-[#000] text-[#dcb66b] font-semibold rounded-md hover:bg-[#333] transition duration-300'>
                                Verify
                            </button>
                        </Link>

                        <p className='text-center mt-4 text-sm text-gray-500'>
                            <Link href="/signin" className='font-semibold text-[#000] hover:underline'>
                                Back to Sign In
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='bg-[#fbf8f0] hidden md:block w-96 h-full rounded-r-xl shadow-lg overflow-hidden'>
                    <img className='hidden md:block h-full w-96 object-cover rounded-r-xl' src="/Images/Auth/forgotpassword.png" alt="OTP Verification Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Page;
