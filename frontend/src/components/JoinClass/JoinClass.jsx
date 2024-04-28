import React from 'react'
import { useLocalContext } from '../../context/context'
import { Avatar, Button, Dialog, Slide, TextField } from '@mui/material'
import { Close } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
});

const JoinClass = () => {
    const { joinClassDialog, setJoinClassDialog } = useLocalContext()
    return (
        <div className="">
            <Dialog
                fullScreen
                open={joinClassDialog}
                onClose={() => setJoinClassDialog(false)}
                TransitionComponent={Transition}
            >
                <div className="flex flex-col items-center">
                    <div className="flex w-full justify-between p-4 border-b-2 border-[#cfcecd] shadow-sm" >
                        <div className="joinClass cursor-pointer" onClick={() => setJoinClassDialog(false)}>
                            <Close />
                        </div>
                        <Button className='font-bold' variant="contained" color="primary">
                            Join
                        </Button>
                    </div>
                    <div className=" border-2 rounded-md mt-4 container w-[33rem] p-4">
                        <p>
                            You're currently signed in as 'login mail'
                        </p>
                        <div className="flex justify-between">
                            <div className="flex">
                                <Avatar />
                                <div className="ml-4">
                                    <div className="font-bold">Adnan Aslam</div>
                                    <div className="text-[#5f6368] overflow-hidden text-ellipsis">Mail</div>
                                </div>
                            </div>
                            <Button variant='outlined' color='primary'>
                                Logout
                            </Button>
                        </div>
                    </div>
                    <div className="border-2 rounded-md mt-4 container w-[33rem] p-4">
                        <div className="text-[1.25rem] font-semibold color-[#3c4043]">
                            Class Code
                        </div>
                        <div className="">
                            Ask Your Teacher for the class code, then enter it here.
                        </div>
                        <div className="mt-2">
                            <TextField id="outlined-basic" label="Class Code" variant="outlined" />
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default JoinClass