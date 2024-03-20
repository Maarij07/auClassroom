import React from 'react';
import {useLocalContext } from "../../context/context";

const createClass= () =>{
    const {createClassDialog,setCreateClassDialog} = useLocalContext();

    return (
        <>
            {createClassDialog && 
                <div className="">Hello</div>
            }
        </>
    )
}

export default createClass;