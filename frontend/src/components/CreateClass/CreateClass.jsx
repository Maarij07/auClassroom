import React from 'react';
import {useLocalContext } from "../../context/context";
import { Button, Dialog, DialogActions, TextField } from '@mui/material';

const createClass= () =>{
    const {createClassDialog,setCreateClassDialog} = useLocalContext();

    return (
        <div className="">
            <Dialog
             onClose={()=> setCreateClassDialog(false)}
             aria-labelledby="customized-dialog-title"
             open={createClassDialog}
             maxWidth="lg"
            >
                <div className="form p-4">
                    <h2 className='font-bold'>Create Class</h2>
                    <div className="p-4 flex flex-col gap-2">
                        <TextField id="filled-basic" label="Class Name (required)" variant='filled' className='w-[30rem]' />
                        <TextField id="filled-basic" label="Section" variant='filled' className='w-[30rem]' />
                        <TextField id="filled-basic" label="Subject" variant='filled' className='w-[30rem]' />
                        <TextField id="filled-basic" label="Room" variant='filled' className='w-[30rem]' />
                    </div>
                    <DialogActions>
                        <Button color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    )
}

export default createClass;