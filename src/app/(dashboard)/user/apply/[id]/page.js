'use client';
import React from 'react';

const Page = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl mb-5 font-bold">Input Form Details</h2>
            <form action="" className="space-y-6 max-w-5xl shadow-md rounded-md border border-gray-300 p-5 ">

                {/* User Information Section */}
                <div className="border-b pb-4">
                    <h3 className="text-2xl font-semibold mb-4">User Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-lg">First Name</label>
                            <input
                                type="text"
                                placeholder='Enter your first name'
                                id="firstName"
                                name="firstName"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-lg">Last Name</label>
                            <input
                                type="text"
                                placeholder='Enter your last name'
                                id="lastName"
                                name="lastName"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label htmlFor="email" className="block text-lg">Email</label>
                            <input
                                type="email"
                                placeholder='Enter your email address'
                                id="email"
                                name="email"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-lg">Phone Number</label>
                            <input
                                type="tel"
                                placeholder='Enter your phone number'
                                id="phone"
                                name="phone"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label htmlFor="address" className="block text-lg">Address</label>
                            <input
                                type="text"
                                placeholder='Enter your address'
                                id="address"
                                name="address"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block text-lg">Date of Birth</label>
                            <input
                                type="date"
                                placeholder='YYYY-MM-DD'
                                id="dob"
                                name="dob"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label htmlFor="passportNumber" className="block text-lg">Passport Number</label>
                            <input
                                type="text"
                                placeholder='Enter passport number'
                                id="passportNumber"
                                name="passportNumber"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="nidNumber" className="block text-lg">NID Number</label>
                            <input
                                type="text"
                                placeholder='National ID Number'
                                id="nidNumber"
                                name="nidNumber"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Insurance Type and Coverage Information Section */}
                <div className="border-b pb-4 mt-6">
                    <h3 className="text-2xl font-semibold mb-4">Insurance Type and Coverage Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="insuranceType" className="block text-lg">Insurance Type</label>
                            <select
                                id="insuranceType"
                                name="insuranceType"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            >
                                <option value="health">Health</option>
                                <option value="life">Life</option>
                                <option value="auto">Auto</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="policyDuration" className="block text-lg">Policy Duration</label>
                            <input
                                type="text"
                                placeholder='Enter policy duration (e.g., 1 year)'
                                id="policyDuration"
                                name="policyDuration"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label htmlFor="policyStartDate" className="block text-lg">Policy Start Date</label>
                            <input
                                type="date"
                                placeholder='YYYY-MM-DD'
                                id="policyStartDate"
                                name="policyStartDate"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="coverageAmount" className="block text-lg">Coverage Amount</label>
                            <input
                                type="number"
                                placeholder='Enter coverage amount'
                                id="coverageAmount"
                                name="coverageAmount"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Payment Information Section */}
                <div className="border-b pb-4 mt-6">
                    <h3 className="text-2xl font-semibold mb-4">Payment Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="paymentMethod" className="block text-lg">Payment Method</label>
                            <select
                                id="paymentMethod"
                                name="paymentMethod"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            >
                                <option value="creditCard">Credit Card</option>
                                <option value="debitCard">Debit Card</option>
                                <option value="bankTransfer">Bank Transfer</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="cardNumber" className="block text-lg">Card Number</label>
                            <input
                                type="text"
                                placeholder='1234 5678 9012 3456'
                                id="cardNumber"
                                name="cardNumber"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label htmlFor="expirationDate" className="block text-lg">Expiration Date</label>
                            <input
                                type="month"
                                placeholder='MM/YYYY'
                                id="expirationDate"
                                name="expirationDate"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="billingAddress" className="block text-lg">Billing Address</label>
                            <input
                                placeholder='Billing Address'
                                type="text"
                                id="billingAddress"
                                name="billingAddress"
                                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <label htmlFor="Note" className="block text-lg">Note</label>
                        <textarea rows={5} className='mt-2 p-2 w-full border border-gray-300 rounded-md' placeholder='Note' name="Note" id=""></textarea>
                    </div>
                </div>

                {/* Terms and Submit Button */}
                <div className="mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" id="agree" className="mr-2" />
                        <label htmlFor="agree" className="text-lg">I have read and agree to the insurance terms.</label>
                    </div>
                    <button type="submit" className="w-full py-3 mt-4 bg-black cursor-pointer text-white rounded-lg">Submit your insurance form</button>
                </div>
            </form>
        </div>
    );
}

export default Page;
