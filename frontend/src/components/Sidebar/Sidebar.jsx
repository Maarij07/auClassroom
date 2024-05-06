import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { auth } from '../../lib/firebase';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

const Sidebar = () => {

    const dispatch=useDispatch();
    function handleLogout(){
        if(confirm('Are you sure you want to log out?')){
            signOut(auth).then(()=>{
                dispatch(setUser(null))
            }).catch((error)=>{
                console.log(error);
            })
        }
    }

    return (
        <div className="flex flex-col gap-10 flex-grow bg-[#032B44] h-screen w-[12rem] text-white items-center justify-around text-xl">
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
            <div className="flex items-center gap-2" onClick={handleLogout}>
                <RiLogoutBoxLine />
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar