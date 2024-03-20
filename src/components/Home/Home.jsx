import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { Menu, MenuItem } from '@mui/material';
import { CreateClass } from '../index';
import { useLocalContext } from '../../context/context';


const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const {createClassDialog,setCreateClassDialog} = useLocalContext();

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <div className="w-[50rem] h-[7rem] flex items-center px-4 justify-between">
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
                    <MenuItem>Join Class</MenuItem>
                    <MenuItem onClick={()=> setCreateClassDialog(true)} >Create Class</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

const Home = ({children}) => {

    

    return (
        <div className="h-screen  w-[80rem] text-black">
            <Navbar />
            <CreateClass/>
            <p>HF</p>
        </div>
    )
}

export default Home