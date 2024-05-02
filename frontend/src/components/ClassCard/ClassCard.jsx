import React from 'react'
import { MdMoreVert } from "react-icons/md";
import { LiaGreaterThanSolid } from "react-icons/lia";

export default function ClassCard() {
    return (
        // <div className="rounded-md border-2 w-[22rem] h-[12.7rem]">
        //     <div className="bg-[#86dbb2] flex text-white w-full justify-between" >
        //         <div className="">
        //             <img src="/class-logo.svg" alt="" className='' width={130} />
        //         </div>
        //         <div className="sm:pt-2">
        //             <h1>Operating System</h1>
        //             <p className='my-1'>Teacher: <span className='font-bold'>Adnan Aslam</span></p>
        //             <p>BSSE-4-A</p>
        //         </div>
        //         <div className="sm:text-4xl pt-2">
        //             <MdMoreVert />
        //         </div>
        //     </div>
        //     <div className=" sm:h-[6.5rem]">
        //         <div className=""></div>
        //         <div className="relative sm:top-[4rem] flex justify-end pr-[1rem] w-full">
        //             <button className='bg-[#86dbb2] rounded-full p-2 text-white'><LiaGreaterThanSolid /></button>
        //         </div>
        //     </div>
        // </div>
        <div className="flex flex-col rounded-lg bg-[#effbf5] p-4 w-[25rem] h-[11rem] ">
            <div className="flex">
                <div className="">
                    <img src="/class-logo.svg" alt="" className='' width={500} />
                </div>
                <div className="flex flex-col">
                    <div className="">
                        <h2 className='font-bold text-xl'>Operating system</h2>
                        <p className='font-extralight text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, tenetur!</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-end gap-2">
                <p>Teacher: <span className='font-bold '>Adnan Aslam</span></p>
                <button className='bg-[#008080] rounded-full px-2 text-white'><LiaGreaterThanSolid /></button>

            </div>
        </div>
    )
}
