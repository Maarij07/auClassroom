import React, { useEffect, useState } from 'react';
import { useLocalContext } from '../../context/context';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { useAuth0 } from '@auth0/auth0-react';
import { FaGoogle } from "react-icons/fa";
import { auth } from '../../lib/firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function SignIn() {
    const dispatch = useDispatch();
    const { loggedInUser, setLoggedInUser } = useLocalContext();
    const { user, loginWithRedirect } = useAuth0();
    const [userCredentials, setUserCredentials] = useState({});
    // const { login, error, isLoading } = useLogin();
    const [error, setError] = useState('')
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         if (user) {
    //             // Set loggedInUser after user information is fetched
    //             setLoggedInUser(user);
    //             console.log("THis: " + loggedInUser)
    //         }
    //     };
    //     fetchUser();
    // }, [user, setLoggedInUser]);

    function handleCredentials(e) {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value })
    }

    function handlePasswordReset() {
        const email = prompt('Please enter your email');
        sendPasswordResetEmail(auth, email);
        alert('Email sent! Check your inbox for password reset instruction')
    }

    function handleLogin(e) {
        e.preventDefault();
        setError("");
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredentials) => {
                console.log(userCredentials.user);
                dispatch(setUser({ id: userCredentials.user.uid, email: userCredentials.user.email }));
            })
            .catch((error) => {
                setError(error.message);
            })
    };


    return (
        <div className="flex">
            <div className="h-screen flex flex-col items-center justify-center gap-[0.2rem] w-1/2">
                <div className="flex sm:relative sm:bottom-16 flex-col items-center">
                    <h3 className='font-extrabold font-["Open_Sans"] text-[3.3rem] text-[#008080]'>Au Classroom.</h3>
                    <h2 className='font-bold text-3xl text-black opacity-90'>Welcome Back</h2>
                </div>
                <form className='flex flex-col gap-2 w-[22rem]'>
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
                    <p onClick={handlePasswordReset} className='underline cursor-pointer font-medium text-blue-800 text-right'>Forgot Password?</p>
                    <button onClick={handleLogin} type="submit" className="rounded-md py-2 font-bold bg-gradient-to-r from-cyan-500 to-[#008080] text-white">Log in</button>
                    <p className='mx-auto text-gray-500 text-xl font-bold'>OR</p>
                    <button className='flex gap-4 rounded-full items-center justify-center text-red-500 font-bold' onClick={(e) => loginWithRedirect()}><FaGoogle />Login With Google</button>
                </form>
                <div className="mt-4">
                    <p>Don't have an account? <Link className='text-blue-800 font-semibold' to="/signup"> Signup</Link> </p>
                </div>
            </div>
            <div className="w-1/2 bg-blue-500 flex items-center justify-center">
                <img src={'/banner.png'} alt="AIR" className='w-full h-full object-cover' />
            </div>
        </div>
    );
}
