'use client';
import { Dropdown, Menu } from 'antd';
import React from 'react';
import { IoNotifications } from 'react-icons/io5';

const UserHeader = () => {
    // Create the dropdown menu
    const items = (
        <Menu>
            <Menu.Item key="1">
                <a href="/profile">View Profile</a>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => console.log("Logging out...")}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='bg-black text-white p-3 flex justify-end items-center'>
            <div className='flex items-center gap-3'>
                <span className='h-12 w-12 bg-[#dcb66b] rounded-lg cursor-pointer flex justify-center items-center'>
                    <IoNotifications className='text-2xl' />
                </span>
                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                    <span className='cursor-pointer'>User Name</span>
                </Dropdown>
            </div>
        </div>
    );
}

export default UserHeader;
