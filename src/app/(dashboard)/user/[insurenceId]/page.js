'use client';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';  // Import Modal and Button from Ant Design
import Link from 'next/link';

const Page = () => {
    const [activeTab, setActiveTab] = useState('personal'); // State to track the active tab
    const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility

    // Function to handle opening the modal
    const handleShowModal = () => {
        setIsModalVisible(true);
    }

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setIsModalVisible(false);
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Insurance Facilities</h1>

            {/* Tab Navigation */}
            <div className="flex border-b-2">
                <button
                    onClick={() => setActiveTab('personal')}
                    className={`py-2 cursor-pointer px-6 text-lg font-medium ${activeTab === 'personal' ? 'text-white bg-[#000000] border-b-2 border-black rounded-t-lg' : 'text-gray-500'}`}
                >
                    Personal
                </button>
                <button
                    onClick={() => setActiveTab('commercial')}
                    className={`py-2 cursor-pointer px-6 text-lg font-medium ${activeTab === 'commercial' ? 'text-white bg-[#000000] border-b-2 border-black rounded-t-lg' : 'text-gray-500'}`}
                >
                    Commercial
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {activeTab === 'personal' && (
                    <div className="grid grid-cols-5 gap-4">
                        {/* Personal Tab Content */}
                        <div onClick={handleShowModal} className="bg-white cursor-pointer p-6 rounded-lg shadow-[0_3px_6px_rgba(0,0,0,0.16),_0_3px_6px_rgba(0,0,0,0.23)] text-center">
                            <div className="bg-black flex items-center justify-center text-white p-4 w-20 h-20 mx-auto rounded-full mb-4">
                                <span className="text-3xl">🏠</span>
                            </div>
                            <p className="text-lg font-semibold">Home</p>
                        </div>
                    </div>
                )}

                {activeTab === 'commercial' && (
                    <div className="grid grid-cols-5 gap-4">
                        {/* Personal Tab Content */}
                        <div onClick={handleShowModal} className="bg-white cursor-pointer p-6 rounded-lg shadow-[0_3px_6px_rgba(0,0,0,0.16),_0_3px_6px_rgba(0,0,0,0.23)] text-center">
                            <div className="bg-black flex items-center justify-center text-white p-4 w-20 h-20 mx-auto rounded-full mb-4">
                                <span className="text-3xl">🏠</span>
                            </div>
                            <p className="text-lg font-semibold">Buisness</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Modal */}
            <Modal
                visible={isModalVisible}  // Controls visibility
                onCancel={handleCloseModal}  // Close the modal when clicking outside or the close button
                footer={null}
            >
                <h2 className='text-2xl font-semibold '>Property</h2>
                <p className='my-5'>We believe that your home should be a reflection of your style and comfort. That's why we offer a curated selection of furniture that blends quality craftsmanship with timeless design. Whether you're looking to refresh your living room, create a cozy bedroom retreat, or find the perfect dining set, we have everything you need to bring your vision to life.
                    We believe that your home should be a reflection of your style and comfort. That's why we offer a curated selection of furniture that blends quality craftsmanship with timeless design. Whether you're looking to refresh your living room, create a cozy bedroom retreat, or find the perfect dining set, we have everything you need to bring your vision to life.</p>
                <Link href={`/user/apply/${1}`} className='!bg-[#000000] block !text-[#dcb66b] font-semibold py-3 px-6 rounded-md mt-4 cursor-pointer transition duration-300 w-full text-center mb-5'>Apply now</Link>

                <div>
                    <p>Contact Info:</p>
                    <p>Email: Support@gmail.com</p>
                    <p>Phone: 464644</p>
                </div>
            </Modal>
        </div>
    );
}

export default Page;
