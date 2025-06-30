import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className="flex items-center justify-center min-h-screen  ">
            <div className="grid w-8/12 sm:w-1/2 mx-auto rounded-xl border-2 shadow-lg bg-[#fbf8f0] p-8">
                <img className='w-20 mb-6 mx-auto' src="/Images/Auth/check.png" alt="" />
                {/* Success Message */}
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-[#4caf50]">Reset Successfully</h2>
                    <p className="text-gray-600 mt-4">
                        Your elegant login password has been updated successfully.
                    </p>
                </div>

                {/* Reset Password Button */}
                <Link href="/login">
                    <button
                        className="w-full cursor-pointer bg-[#000] text-[#dcb66b] font-semibold py-3 rounded-md mt-6 hover:bg-[#333] transition duration-300"
                    >
                        Log In
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Page;
