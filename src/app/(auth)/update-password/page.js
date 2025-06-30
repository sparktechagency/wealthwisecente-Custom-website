'use client'
import React, { useState } from 'react';

const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Handle password reset logic here
        alert('Password reset successfully!');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#ffffff]">
            <div className="grid lg:grid-cols-2 gap-5 items-center bg-[#fbf8f0] w-11/12 sm:w-1/2 mx-auto rounded-xl border-2 shadow-lg">
                {/* Form Section */}
                <form onSubmit={handleSubmit} className="p-8">
                    <img className="w-20 mb-6 " src="/Images/Auth/lion.png" alt="Logo" />
                    <h2 className="text-3xl font-semibold my-3 ">Reset Password</h2>
                    <p className=" my-4 text-gray-600">Please enter your new password.</p>

                    {/* New Password Input */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="newPassword" className="font-semibold">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#dcb66b]"
                            placeholder="Enter your new password"
                            required
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="confirmPassword" className="font-semibold">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#dcb66b]"
                            placeholder="Confirm your new password"
                            required
                        />
                    </div>

                    {/* Reset Password Button */}
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-[#000] text-[#dcb66b] font-semibold py-3 rounded-md mt-6 hover:bg-[#333] transition duration-300">
                        Reset Password
                    </button>
                </form>

                {/* Right Side Image */}
                <div className="lg:block hidden">
                    <img className="h-full w-full object-cover rounded-r-xl" src="/Images/Auth/forgotPassword.png" alt="Reset Password Illustration" />
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
