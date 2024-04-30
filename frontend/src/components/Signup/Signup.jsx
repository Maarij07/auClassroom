import React, { useState } from 'react';
import { useLocalContext } from '../../context/context';
import { useSignup } from '../../hooks/useSignup';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { useAuth0 } from '@auth0/auth0-react';
import { FaGoogle } from "react-icons/fa";
import { auth } from '../../lib/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';

export default function Signup() {
    const dispatch = useDispatch();
    const { login } = useLocalContext();
    const { user, loginWithRedirect } = useAuth0();
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('')
    // const {signup,error,isLoading}=useSignup()

    function handleCredentials(e) {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value })
    }

    function handleSignup(e) {
        e.preventDefault();
        setError("")
        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(userCredential.user);
                dispatch(setUser({ id: userCredential.user.uid, email: userCredential.user.email }))
            })
            .catch((error) => {
                setError(error.message)
            });
    };

    return (
        <div className="flex">
            <div className="w-1/2 bg-blue-500 flex items-center justify-center">
                <img src={'/banner.png'} alt="AIR" className='w-full h-full object-cover' />
            </div>
            <div className="h-screen flex flex-col items-center justify-center gap-[0.2rem] w-1/2">
                <div className=" flex flex-col items-center">
                    <h3 className='font-extrabold font-["Open_Sans"] text-[3.3rem] text-[#008080]'>Au Classroom.</h3>
                    <h2 className='font-bold text-3xl text-black opacity-90'>Sign Up</h2>
                </div>
                <form className='flex flex-col gap-3 w-[22rem]'>

                    {error && <div className='border-2 rounded-full text-white bg-[#eb4848] border-[#eb4848] py-2 px-4 '>
                        {error}</div>}

                    <div className="flex sm:flex-col">
                        <label className='font-bold '>Email Address:</label>
                        <input className='border-2 rounded-md py-2 px-4' name='email' required type="email" placeholder='Email' onChange={(e) => { handleCredentials(e) }} />
                    </div>
                    <div className="flex sm:flex-col">
                        <label className='font-bold '>Password:</label>
                        <input className="border-2 rounded-md py-2 px-4" name='password' required type="password" placeholder='Password' onChange={(e) => { handleCredentials(e) }} />
                    </div>
                    <button onClick={(e) => { handleSignup(e) }} type="submit" className="rounded-md py-2 font-bold bg-gradient-to-r from-cyan-500 to-[#008080] text-white">SIGN UP</button>
                    <p className='mx-auto text-gray-500 text-xl font-bold'>OR</p>
                    <button className='flex gap-4 rounded-full items-center justify-center text-red-500 font-bold' onClick={(e) => loginWithRedirect()}><FaGoogle />Login With Google</button>
                </form>
                <div className="mt-4">
                    <p>Already have an account? <Link className='text-blue-800 font-semibold' to="/"> Login</Link> </p>
                </div>
            </div>
        </div>
    );
}
