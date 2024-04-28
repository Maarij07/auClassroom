import React, { useState } from 'react';
import { useLocalContext } from '../../context/context';
import { useLogin } from '../../hooks/useLogin';

export default function SignIn() {
    // const { login } = useLocalContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login,error,isLoading}=useLogin()

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        await login(email,password)
    };

    return (
        <div className="flex">
            <div className="h-screen flex flex-col items-center justify-center gap-[0.2rem] w-1/2">
                <h2 className='font-bold text-3xl text-black opacity-90'>Welcome to</h2>
                <h3 className='font-extrabold font-["Open_Sans"] text-[3.3rem] text-[#008080]'>Air Classroom.</h3>
                <h4 className='text-center mb-4'>Login to continue with your study session</h4>
                <form onSubmit={handleFormSubmit} className='flex flex-col gap-3 w-[22rem]'>
                    <input className='border-2 rounded-full py-2 px-4' required type="email" placeholder='Email' value={email} onChange={handleEmailChange} />
                    <input className="border-2 rounded-full py-2 px-4" required type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
                    {error && <p className='text-red-500'>{error}</p>}
                    <button disabled={isLoading} type="submit" className="rounded-full py-2 font-bold bg-gradient-to-r from-cyan-500 to-[#008080] text-white">Log in</button>
                    <p className='mx-auto text-gray-500 text-xl font-bold'>OR</p>
                    {/* <button className='flex gap-4 rounded-full items-center justify-center text-red-500 font-bold' onClick={handleGoogleLogin}><FaGoogle />Login With Google</button> */}
                </form>
            </div>
            <div className="w-1/2 bg-blue-500 flex items-center justify-center">
                <img src={'/banner.png'} alt="AIR" className='w-full h-full object-cover' />
            </div>
        </div>
    );
}
