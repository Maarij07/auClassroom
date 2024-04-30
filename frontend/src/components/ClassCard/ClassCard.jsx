import React from 'react'
import { MdMoreVert } from "react-icons/md";
import { LiaGreaterThanSolid } from "react-icons/lia";

export default function ClassCard() {
    return (
        <div className="rounded-md border-2 w-[22rem] h-[12.7rem]">
            <div className="bg-[#86dbb2] flex text-white w-full justify-between" >
                <div className="">
                    <img src="/class-logo.svg" alt="" className='' width={130} />
                </div>
                <div className="sm:pt-2">
                    <h1>Operating System</h1>
                    <p className='my-1'>Teacher: <span className='font-bold'>Adnan Aslam</span></p>
                    <p>BSSE-4-A</p>
                </div>
                <div className="sm:text-4xl pt-2">
                    <MdMoreVert />
                </div>
            </div>
            <div className=" sm:h-[6.5rem]">
                <div className=""></div>
                <div className="relative sm:top-[4rem] flex justify-end pr-[1rem] w-full">
                    <button className='bg-[#86dbb2] rounded-full p-2 text-white'><LiaGreaterThanSolid /></button>
                </div>
            </div>
        </div>
    )
}
