import React, { useState,useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { Avatar, Menu, MenuItem } from '@mui/material';
import { CreateClass, JoinClass, Todos, Sidebar } from '../index';
import { useLocalContext } from '../../context/context';
import {Classes} from '../index'
import Calendar from 'react-calendar';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { setCreateClassDialog, setJoinClassDialog } = useLocalContext();

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleJoin = () => {
        handleClose();
        setJoinClassDialog(true);
    }
    const handleCreate = () => {
        handleClose();
        setCreateClassDialog(true);
    }

    return (
        <div className="w-[55rem] h-[7rem] flex items-center px-4 justify-between">
            <div className="">
                <h1 className='text-[#008080] font-semibold text-3xl'>My Courses</h1>
            </div>
            <div className="flex gap-4 text-3xl">
                <IoSearchOutline className='cursor-pointer' />
                <IoMdAdd onClick={handleClick} className='cursor-pointer' />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleJoin}>Join Class</MenuItem>
                    <MenuItem onClick={handleCreate} >Create Class</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

const Home = ({ children }) => {
    const {loggedInUser}=useLocalContext()
    useEffect(()=>{
        console.log("This: " + loggedInUser);
    },[loggedInUser])

    return (
        <div className="flex">
            <Sidebar />
            <div className="h-screen flex w-[80rem] text-black">
                <div className="">
                    <Navbar />
                    <CreateClass />
                    <JoinClass />
                    <Classes/>
                </div>
                <div className="bg-[#f0f0f0] h-screen w-[20rem] flex flex-col justify-between py-8 px-6">
                    <div className="flex justify-end items-center gap-4">
                        <div className="text-right ">
                            <h1 className="font-bold leading-4 text-xl">User Name</h1>
                            <p>User Id</p>
                        </div>
                        <div className="h-full">
                            <Avatar {...stringAvatar('Tim Neutkens')} sx={{ width: 48, height: 48 }} />
                        </div>
                    </div>
                    <div className=""><Calendar /></div>
                    <div className="flex flex-col h-[20rem]">
                        <Todos />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home