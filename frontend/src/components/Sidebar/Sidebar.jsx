import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { auth } from '../../lib/firebase';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { MdOutlineVideoCameraFront } from "react-icons/md";

const Sidebar = () => {

    const dispatch = useDispatch();
    function handleLogout() {
        if (confirm('Are you sure you want to log out?')) {
            signOut(auth).then(() => {
                dispatch(setUser(null))
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <div className="flex flex-col gap-10 flex-grow bg-[#0071ff] h-screen w-[11rem] text-white items-center justify-around text-xl fixed">
            <div className="">
                <img src="/class-logo.png" alt="logo" width={120} />
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                    <IoHomeOutline />
                    <span>Home</span>
                </div>
                <div className="flex items-center gap-2">
                    <MdOutlineVideoCameraFront />
                    <span>Meetings</span>
                </div>
                <div className="flex items-center gap-2">
                    <IoSettingsOutline />
                    <span>Settings</span>
                </div>
            </div>
            <div className="flex items-center gap-2" onClick={handleLogout}>
                <RiLogoutBoxLine />
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar