import React from 'react'
import TopBar from '../TopBar/TopBar'
import { Avatar, TextField, Button } from '@mui/material'
import { useState } from 'react';
import { storage } from '../../lib/firebase';
import { ref, uploadBytes } from 'firebase/storage';

const Main = ({ classData }) => {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState();
    const [file,setFile] = useState(null);

    const handleChange=(e)=>{
        if(e.target.files[0]){
            setFile(e.target.files[0]);
        }
    }
    const handleUpload=()=>{
        const uploadImage=ref(storage,`files/${file.name}`)
        console.log("reference created")

        // uploadImage.on('state_changed',()=>{
        //     storage.ref('images').child(file.name).getDownloadURL().then(()=>{
        //         console.log("No issue uptil now");
        //     })
        // })
        uploadBytes(uploadImage,file).then(()=>{
            console.log("Uploading");
        })
    }

    return (
        <div className="">
            <TopBar />
            <div className="flex flex-col gap-6 items-center pt-[1.2rem]">
                <div className="rounded-md bg-[#032B44] text-white w-[70rem] h-[11rem] p-6">
                    <h1 className='font-bold text-4xl'>{classData.className}</h1>
                    <h1 className='mt-[0.2rem]'>{classData.section}</h1>
                    <h2 className='font-bold text-sm mt-3'>Class Code:</h2>
                    <h2>{classData.id}</h2>
                </div>
                <div className="flex gap-4">
                    <div className="flex sm:flex-col gap-2">
                        <div className="border-2 p-4 rounded-md sm:w-[14rem]">
                            <h1 className='text-md font-semibold'>Upcoming</h1>
                            <p>No Work Due</p>
                        </div>
                        <div className="border-2 p-4 rounded-md sm:w-[14rem]">
                            <h1 className='text-md font-semibold'>Air Teams</h1>
                        </div>
                    </div>
                    <div className="flex border-2 cursor-pointer items-center gap-4 p-4 rounded-md sm:w-[55rem]" onClick={() => setShowInput(true)}>
                        {showInput ?
                            <div className='w-full'>
                                <TextField
                                    multiline
                                    label="Announce Something to your class"
                                    variant='filled'
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className='w-full p-4'
                                />
                                <div className="flex justify-between sm:mt-[1.2rem]">
                                    <input onChange={handleUpload} type="file" color='primary' variant="outlined" />
                                    <div className="flex">
                                        <Button onClick={() => setShowInput(false)}>Cancel</Button>
                                        <Button color='primary' variant='contained'>Post</Button>
                                    </div>
                                </div>
                            </div> :
                            (
                                <>
                                    <Avatar />
                                    <p>Announce Something to your Class</p>
                                </>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main