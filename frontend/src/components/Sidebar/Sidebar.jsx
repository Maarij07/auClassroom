import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import {useLogout} from '../../hooks/useLogout.jsx';

const Sidebar = () => {
    const {logout}=useLogout()

    const handleClick=() => {
        logout()
    }

    return (
        <div className="flex flex-col gap-10 flex-grow bg-gradient-to-b from-[#5FE1A1] to-[#34516D] h-screen w-[12rem] text-white items-center justify-around text-xl">
            <div className="">
                <img src="/logo.png" alt="logo" />
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                    <IoHomeOutline />
                    <span>Home</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>All courses</span>
                </div>
                <div className="flex items-center gap-2">
                    <IoSettingsOutline />
                    <span>Settings</span>
                </div>
            </div>
            <div className="flex items-center gap-2" onClick={handleClick}>
                <RiLogoutBoxLine />
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar