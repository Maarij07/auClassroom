import React from 'react'
import { MdMoreVert } from "react-icons/md";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

export default function ClassCard({ classData }) {
    console.log(classData)
    return (
        <div className="flex flex-col rounded-lg bg-gradient-to-b from-[#AEE6FD] to-[#688A97] p-4 w-[25rem] h-[10rem] ">
            <div className="flex">
                <div className="">
                    <img src="/class-logo.svg" alt="" className='' width={300} />
                </div>
                <div className="flex flex-col">
                    <Link  to={`/${classData.id}`} className='font-bold text-xl'>{classData.courseName}</Link>
                    <p className='font-extralight text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, tenetur!</p>
                    <Link className="flex w-full mt-2 justify-end gap-2" to={`/${classData.id}`}>
                        <p>Teacher: <span className='font-bold '>{classData.teacher}</span></p>
                        <button className='bg-[#008080] rounded-full px-2 text-white'><LiaGreaterThanSolid /></button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
