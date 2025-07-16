'use client';
import React, { useState } from 'react';
import { Modal, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Page = () => {
    const [isChangePasswordModalVisible, setIsChangePasswordModalVisible] = useState(false);
    const [isEditProfileModalVisible, setIsEditProfileModalVisible] = useState(false);
    const [fileList, setFileList] = useState([]); // To handle the uploaded file

    // Change Password Modal
    const showChangePasswordModal = () => {
        setIsChangePasswordModalVisible(true);
    };
    const handleChangePasswordCancel = () => {
        setIsChangePasswordModalVisible(false);
    };

    // Edit Profile Modal
    const showEditProfileModal = () => {
        setIsEditProfileModalVisible(true);
    };
    const handleEditProfileCancel = () => {
        setIsEditProfileModalVisible(false);
    };

    // Handle file upload
    const handleUploadChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        console.log(newFileList);
    };

    // Validate upload file type
    const handleBeforeUpload = (file) => {
        const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isImage) {
            message.error('You can only upload JPG/PNG file!');
        }
        return isImage;
    };

    return (
        <div className="md:p-6 p-2">
            <h1 className="text-3xl font-bold mb-6">My Profile</h1>

            <div className="flex flex-wrap md:flex-nowrap gap-10">
                {/* Profile Image Section */}
                <div className="md:w-1/3 w-full shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-6 bg-white flex flex-col items-center">
                    <div className="md:flex flex-col items-center">
                        <img
                            src="/Images/Home/OurProfessionalTeam1.jpg"
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover mb-4"
                        />
                        <button className="text-sm text-blue-500 hover:underline">Upload a Photo</button>
                        <p className="mt-4 text-xl font-semibold">Bashar Islam</p>
                    </div>
                </div>

                {/* Profile Information Section */}
                <div className="md:w-2/3">
                    <p className="text-2xl font-semibold">Hello, Bashar Islam,</p>
                    <div className="mt-6 grid md:grid-cols-2 gap-x-10 space-y-3">
                        <div>
                            <p className="text-lg font-medium">Email</p>
                            <p className="text-gray-700">bashar.islam@gmail.com</p>
                        </div>
                        <div>
                            <p className="text-lg font-medium">Phone Number</p>
                            <p className="text-gray-700">999</p>
                        </div>
                        <div>
                            <p className="text-lg font-medium">Address</p>
                            <p className="text-gray-700">Rangpur</p>
                        </div>
                        <div>
                            <p className="text-lg font-medium">Date of Birth</p>
                            <p className="text-gray-700">01 Jan 1990</p>
                        </div>
                        <div>
                            <p className="text-lg font-medium">Passport Number</p>
                            <p className="text-gray-700">ABC123456</p>
                        </div>
                        <div>
                            <p className="text-lg font-medium">NID Number</p>
                            <p className="text-gray-700">123456789</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex gap-4">
                        <button
                            onClick={showChangePasswordModal}
                            className="border border-[#dcb66b] text-[#dcb66b] py-2 px-4 rounded-md cursor-pointer transition duration-300"
                        >
                            Change Password
                        </button>
                        <button
                            onClick={showEditProfileModal}
                            className="bg-[#000] text-white py-2 px-4 rounded-md cursor-pointer transition duration-300"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Change Password Modal */}
            <Modal
                visible={isChangePasswordModalVisible}
                onCancel={handleChangePasswordCancel}
                footer={null} // No footer buttons
            >
                <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
                <div>
                    <p>Enter your current password:</p>
                    <Input.Password placeholder="Current Password" className="mb-4 !py-2" />
                    <p>Enter new password:</p>
                    <Input.Password placeholder="New Password" className="mb-4 !py-2" />
                    <p>Confirm new password:</p>
                    <Input.Password placeholder="Confirm New Password" className="mb-3 !py-2" />
                    <button className="bg-[#000] text-white py-2 px-4 rounded-md w-full text-center cursor-pointer transition duration-300">Change Password</button>
                </div>
            </Modal>

            {/* Edit Profile Modal */}
            <Modal
                visible={isEditProfileModalVisible}
                onCancel={handleEditProfileCancel}
                footer={null}
            >
                <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
                <div>
                    <p>Edit your first name:</p>
                    <Input placeholder="First Name" className="!mb-4 !py-2" defaultValue="Bashar" />
                    <p>Edit your last name:</p>
                    <Input placeholder="Last Name" className="!mb-4 !py-2" defaultValue="Islam" />
                    <p>Edit your email:</p>
                    <Input placeholder="Email" className="!mb-4 !py-2" defaultValue="bashar.islam@gmail.com" />
                    <p>Edit your phone number:</p>
                    <Input placeholder="Phone Number" className="!mb-4 !py-2" defaultValue="999" />
                    <p>Edit your address:</p>
                    <Input placeholder="Address" className="!mb-4 !py-2" defaultValue="Rangpur" />
                    <p>Edit your date of birth:</p>
                    <Input placeholder="Date of Birth" className="!mb-4 !py-2" defaultValue="01 Jan 1990" />
                    <p>Edit your passport number:</p>
                    <Input placeholder="Passport Number" className="!mb-4 !py-2" defaultValue="ABC123456" />
                    <p>Edit your NID number:</p>
                    <Input placeholder="NID Number" className="!mb-4 !py-2" defaultValue="123456789" />

                    {/* File Upload Section */}
                    <p className="mt-4">Upload a new profile picture:</p>
                    <Upload
                        fileList={fileList}
                        beforeUpload={handleBeforeUpload}
                        onChange={handleUploadChange}
                        accept="image/png, image/jpeg"
                    >
                        <Button icon={<UploadOutlined />} className="w-full">Click to Upload</Button>
                    </Upload>

                    <button className="bg-[#000] text-white text-base !py-2 px-4 rounded-md w-full text-center cursor-pointer transition duration-300 mt-4">
                        Save Changes
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Page;
